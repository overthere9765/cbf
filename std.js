const CryptoJS = require('crypto-js');


const COLOR = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",

    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",

    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m",

    Clear: "\033[2J"
}


const log = console.log;
function logSuccess() {
    console.log(COLOR.FgGreen, Object.values(arguments).join(" "), COLOR.Reset)
};
function logError() {
    console.log(COLOR.FgRed, Object.values(arguments).join(" "), COLOR.Reset)
};
function logWaning() {
    console.log(COLOR.FgYellow, Object.values(arguments).join(" "), COLOR.Reset)
};

function encryptString(content = "", password = "Secret Passphrase") {
    return CryptoJS.AES.encrypt(content, password).toString();
}

function decryptString(ciphertext = "", password = "Secret Passphrase") {
    return CryptoJS.AES.decrypt(ciphertext, password).toString(CryptoJS.enc.Utf8);
}


module.exports = { COLOR, log, logSuccess, logError, logWaning, encryptString, decryptString };

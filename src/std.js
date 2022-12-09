const CryptoJS = require('crypto-js');

const log = console.log
const logwarn = console.warn
const logerror = console.error

function encryptString(content = "", password = "Secret Passphrase") {
    return CryptoJS.AES.encrypt(content, password).toString();
}

function decryptString(ciphertext = "", password = "Secret Passphrase") {
    return CryptoJS.AES.decrypt(ciphertext, password).toString(CryptoJS.enc.Utf8);
}

export { log, logwarn, logerror, encryptString, decryptString }

const CryptoJS = require('crypto-js');


const { encryptString, decryptString, logWaning } = require("./std");

let content = "0x56d694cE6bF6762Ee654A21E00529a04D8D5C464"

var encrypted = encryptString(content);
console.log(encrypted)

var decrypted = decryptString("U2FsdGVkX19M3bpBnYm8XKCl8csQnOxsZur60VHZ7CxneoHXk/t48k+OH1v3f4iQZIdQNCsp0ayGIgqqxpiryg==");
logWaning(decrypted.toString(CryptoJS.enc.Utf8))


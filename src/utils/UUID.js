const uuidv3 = require('uuid/v3');
const crypto = require("crypto");

export function uuid() {
    return crypto.randomBytes(16).toString("hex");
}

export function uuid3(username) {
    const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
    return uuidv3(username, MY_NAMESPACE);
}

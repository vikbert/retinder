const crypto = require("crypto");

export default function uuid() {
    return crypto.randomBytes(16).toString("hex");
}

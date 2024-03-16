// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const crypto = require("crypto");

// Gera uma chave aleatória de 256 bits (32 bytes)
const secretKey = crypto.randomBytes(32).toString("hex");
console.log("Secret Key:", secretKey);

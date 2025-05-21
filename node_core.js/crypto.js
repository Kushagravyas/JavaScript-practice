// crypto.randomByte(size)
    //  purpose:> generates cryptographically strong data.
    // usage:> useful for creating tokens or unique IDs.
// crypto.createHash(algorithm)
    // purpose:> create a hash for a given input using algorithms like sha256.
    // usage:> Ensure data integrity (verifying file changes)
const crypto = require("crypto");
const randomValue = crypto.randomBytes(8).toString("hex");
console.log(randomValue);


const hashValue  = crypto.createHash("sha256").update("kushagra vyas").digest("hex");
console.log(hashValue);
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    if (!process.env.JWT_SECRET_KEY) {
        throw new Error("JWT_SECRET is missing!");
    }
    return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
};

module.exports = generateToken;

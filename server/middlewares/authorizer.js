const errorHandlerModule = require("../helpers/error");
const errorHandler = errorHandlerModule();
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const fs = require("fs");
var path = require("path");
var publicKey = fs.readFileSync(path.resolve("public.key"), "utf8");

const authorizer = async (req, res, next) => {
    try {
        if (req.headers["authorization"]) {
            const token = req.headers["authorization"].split(" ")[1];
            if (token == null) {
                return res.sendStatus(401);
            }
            const verifyOptions = {
                issuer: config.issuer,
                subject: config.subject,
                audience: config.aud,
                maxAge: "24h",
                algorithms: ["RS256"]
            };
            return jwt.verify(token, publicKey, verifyOptions, (err, user) => {
                if (err) {
                    return res.status(401).json(err);
                }
                const user_id = user.user_id;
                req.user_id = user_id?.toLowerCase();
                next();
                return;
            });
        } else if (!req.headers["authorization"]) {
            return errorHandler.throwUnauthorizedError(
                `Error: ${JSON.stringify("NO token provided access denied")}`,
                req,
                res
            );
        }
    } catch (e) {
        console.log(e);
        return errorHandler.errorHandler.throwInternalServerError(
            "Internal Server Error!",
            req,
            res
        );
    }
};

module.exports = {
    authorizer
};

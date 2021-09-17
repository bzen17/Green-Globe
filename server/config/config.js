require("dotenv").config();
const Joi = require("joi");
const nodemailer = require("nodemailer");
// define validation for all the env vars
const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().default("development"),
    TEST_AUTOMATION: Joi.boolean().default(false),
    ISSUER: Joi.string().default("Green Globe PVT LTD"),
    SUBJECT: Joi.string().default("no-reply@greenglobe.co.in"),
    AUD: Joi.string().default("www.greenglobe.co.in"),
    EXPIRES_IN: Joi.string().default("24h"),
    EMAIL_SERVICE: Joi.string().default("gmail"),
    EMAIL_AUTH_USER: Joi.string().default("ayan1741995@gmail.com"),
    EMAIL_AUTH_PASS: Joi.string().default("lokkmtkuaiytqqjn"),
})
    .unknown()
    .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error && error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    test_automation: envVars.TEST_AUTOMATION,
    port: envVars.PORT,
    app_version: process.env.npm_package_version,
    dbUrl: `mongodb://${envVars.DB_USER}:${envVars.DB_PASS}@${envVars.DB_HOST}:${envVars.DB_PORT}/${envVars.DB_NAME}?authSource=admin`,
    localDBURL: "mongodb://localhost:27017/green_globe",
    defaultPassword: "pass@123",
    issuer: envVars.ISSUER,
    subject: envVars.SUBJECT,
    aud: envVars.AUD,
    exp: envVars.EXPIRES_IN,
    contactEmail: envVars.EMAIL_AUTH_USER,
    emailClient : nodemailer.createTransport({
        service: envVars.EMAIL_SERVICE,
        auth: {
            user: envVars.EMAIL_AUTH_USER,
            pass: envVars.EMAIL_AUTH_PASS
        }
    })
};

module.exports = config;

/* eslint-disable max-len */
// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();
const Joi =require('joi');

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .default('development'),
  TEST_AUTOMATION: Joi.boolean()
    .default(false),
    ISSUER: Joi.string()
    .default('Green Globe PVT LTD'),
    SUBJECT: Joi.string()
    .default('no-reply@greenglobe.co.in'),
    AUD: Joi.string()
    .default('www.greenglobe.co.in'),
    EXPIRES_IN: Joi.string()
    .default('24h'),
}).unknown()
  .required();

const {
  error,
  value: envVars,
} = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error&&error.message}`);
}


const config = {
  env: envVars.NODE_ENV,
  test_automation: envVars.TEST_AUTOMATION,
  port: envVars.PORT,
  app_version: process.env.npm_package_version,
  dbUrl: `mongodb://${envVars.DB_USER}:${envVars.DB_PASS}@${envVars.DB_HOST}:${envVars.DB_PORT}/${envVars.DB_NAME}?authSource=admin`,
  localDBURL: 'mongodb://localhost:27017/green_globe',
  defaultPassword:'pass@123',
  issuer:envVars.ISSUER,
  subject:envVars.SUBJECT,
  aud: envVars.AUD,
  exp: envVars.EXPIRES_IN
};

module.exports = config;

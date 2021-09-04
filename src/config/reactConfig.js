const Joi =require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
// all variables for react must start with REACT_APP_
require('dotenv').config();

// define validation for all the env vars for REACT_APP_
const envReactVarsSchema = Joi.object({
  REACT_APP_API_BASE_URL: Joi.string()
    .default('http://localhost:3000'),
}).unknown()
  .required();

const {
  error,
  value: envVars,
} = envReactVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error&&error.message}`);
}

const reactConfig = {
  baseUrl: envVars.REACT_APP_API_BASE_URL,
};

module.exports = reactConfig;

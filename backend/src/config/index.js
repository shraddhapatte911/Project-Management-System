import { prod_env_variables } from "./environments/production.js"
import { dev_env_variables } from "./environments/development.js"

const getEnvVariable = (varName, envConfig) => envConfig[varName];

const environment = process.env.NODE_ENV;
const envVariables = environment === "PROD" ? prod_env_variables : dev_env_variables;

export const getEnv = (varName) => getEnvVariable(varName, envVariables);
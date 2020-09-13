"use strict";
const path = require("path");

const NODE_ENV = process.env.NODE_ENV || "development";

const getClientEnvironmentVariables = () => {
  loadEnviromentVariables();
  const raw = getRawVariablesFromEnviroment();
  const stringified = getStringifiedFromRawVariables(raw);

  return { raw, stringified };
};

const loadEnviromentVariables = () => {
  if (NODE_ENV !== "production") {
    requireRootEnviromentFile();
  }
};

const requireRootEnviromentFile = () => {
  require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
  });
};

const getRawVariablesFromEnviroment = () => {
  const clientEnviromentVariablesRegularExpression = /^REACT_APP_/i;
  const initialRawVariables = { NODE_ENV };
  const rawVariables = Object.keys(process.env)
    .filter(matchRegularExpression(clientEnviromentVariablesRegularExpression))
    .reduce(toObjectFromProcessKeys, initialRawVariables);

  return rawVariables;
};

const matchRegularExpression = regularExpression => value =>
  regularExpression.test(value);

const toObjectFromProcessKeys = (object, key) => {
  object[key] = process.env[key];
  return object;
};

const getStringifiedFromRawVariables = raw => {
  return {
    "process.env": Object.keys(raw).reduce(toStringifiedFromRawKeys(raw), {})
  };
};

const toStringifiedFromRawKeys = raw => (env, key) => {
  env[key] = JSON.stringify(raw[key]);
  return env;
};

module.exports = getClientEnvironmentVariables;

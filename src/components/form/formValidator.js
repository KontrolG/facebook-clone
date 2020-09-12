import isEmail from "validator/es/lib/isEmail";
import isLength from "validator/es/lib/isLength";
import isEmpty from "validator/es/lib/isEmpty";

const validator = {
  isEmail,
  isLength,
  isRequired: (...parameters) => !isEmpty(...parameters)
};

export default validator;

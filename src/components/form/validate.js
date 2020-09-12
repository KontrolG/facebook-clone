import validator from "./formValidator";
import mapObjectEntries from "../../utils/mapObjectEntries";
import getObjectFromEntries from "../../utils/getObjectFromEntries";

const getValidationMessage = ([validationName, validationOptions]) => {
  if (typeof validationOptions === "string") {
    return validationOptions;
  }
  return validationOptions.message || "Default message here";
};

const fieldEntryHasErrors = ([fieldName, errors]) => errors.length > 0;

const getErrorsFromValidationResults = validationsResults => {
  const hasErrors = validationsResults.some(fieldEntryHasErrors);
  return hasErrors ? getObjectFromEntries(validationsResults) : null;
};

function FieldValueIsValidate(validationName, options, fieldValue) {
  const validation = validator[validationName];
  const hasOptions = typeof options === "object";

  return hasOptions ? validation(fieldValue, options) : validation(fieldValue);
}

const toFieldValidationsResults = fieldValue => validationEntry => {
  const [validationName, options] = validationEntry;
  if (!options) return;
  const validationMessage = getValidationMessage(validationEntry);
  const isValidate = FieldValueIsValidate(validationName, options, fieldValue);

  return !isValidate
    ? { type: validationName, message: validationMessage }
    : null;
};

const toValidationsResults = values => ([fieldName, validations]) => {
  const fieldValue = values[fieldName] || "";
  const fieldErrors = mapObjectEntries(
    validations,
    toFieldValidationsResults(fieldValue)
  ).filter(Boolean);

  return [fieldName, fieldErrors];
};

const getValidationsResults = (values, validationsSchema) =>
  mapObjectEntries(validationsSchema, toValidationsResults(values));

const validate = (values, validationsSchema) => {
  const validationsResults = getValidationsResults(values, validationsSchema);
  return getErrorsFromValidationResults(validationsResults);
};

export default validate;

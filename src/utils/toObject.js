const toObject = ([fieldName, errors]) => {
  const object = {};
  object[fieldName] = errors;
  return object;
};

export default toObject;

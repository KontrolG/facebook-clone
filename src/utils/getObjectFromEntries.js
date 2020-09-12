import toObject from "./toObject";

const getObjectFromEntries = entries => {
  const objects = entries.map(toObject);
  return Object.assign(...objects);
};

export default getObjectFromEntries;

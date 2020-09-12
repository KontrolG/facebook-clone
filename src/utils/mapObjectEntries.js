const mapObjectEntries = (object, mapToFunction) => {
  const objectEntries = Object.entries(object);
  return objectEntries.map(mapToFunction);
};

export default mapObjectEntries;

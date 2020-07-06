import PropTypes from "prop-types";

const getFormattedDateString = date => {
  const timeLapsedInSeconds = getTimeLapsedInSeconds(date);
  const twoDaysInSeconds = 172800;
  if (timeLapsedInSeconds >= twoDaysInSeconds) {
    return getFixedDateString(date);
  } else {
    return getTimeLapsedString(timeLapsedInSeconds);
  }
};

const getTimeLapsedInSeconds = date => {
  const milisecondsPerSecond = 1000;
  const timeLapsedInMiliseconds = Date.now() - date;
  return timeLapsedInMiliseconds / milisecondsPerSecond;
};

const getFixedDateString = date =>
  date.toLocaleString("es-VE", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });

const getTimeLapsedString = timeLapsedInSeconds => {
  const timeInUnits = getTimeInUnits(timeLapsedInSeconds);
  const greaterTimeUnit = getGreaterTimeUnit(timeInUnits);
  return greaterTimeUnit
    ? getStringFromTimeUnit(greaterTimeUnit)
    : "Recientemente";
};

const getTimeInUnits = seconds => {
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  return { days, hours, minutes };
};

const getGreaterTimeUnit = timeInUnits => {
  const unitsInArrayOfEntries = Object.entries(timeInUnits);
  return unitsInArrayOfEntries.find(hasAtleastOneQuantity);
};

const hasAtleastOneQuantity = ([, quantity]) => Math.floor(quantity) > 0;

const getStringFromTimeUnit = ([unit, quantity]) => {
  const quantityFloor = Math.floor(quantity);
  const unitFixed = getFixedUnit(quantityFloor, unit);
  return `${quantityFloor} ${unitFixed}`;
};

const getFixedUnit = (quantityFloor, unit) => {
  const isPlural = quantityFloor > 1;
  if (isPlural) return unit;
  const unitInSingular = unit.slice(0, -1);
  return unitInSingular;
};

const DateFormatter = ({ children, date, ...restProps }) =>
  children(getFormattedDateString(date), restProps);

DateFormatter.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  children: PropTypes.func.isRequired
};
export default DateFormatter;

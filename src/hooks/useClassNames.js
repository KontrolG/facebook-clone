import { useState } from "react";

const useClassNames = (defaultClassNames = []) => {
  const [classNames, setClassNames] = useState(defaultClassNames);

  const addClassNameIf = (condition, className) => {
    if (condition) {
      pushNewClassName(className);
    } else {
      removeClassName(className);
    }
  };

  const pushNewClassName = newClassName => {
    const isNew = !classNames.includes(newClassName);
    if (isNew) {
      setClassNames(classNames => [...classNames, newClassName]);
    }
  };

  const removeClassName = className => {
    const classNameIndex = classNames.indexOf(className);
    if (classNameIndex !== -1) {
      removeIndexFromClassNames(classNameIndex);
    }
  };

  const removeIndexFromClassNames = index => {
    const newClassNames = [...classNames].splice(index, 1);
    setClassNames(newClassNames);
  };

  return [classNames.join(" "), addClassNameIf];
};

const x = defaultClassNames => {
  const classNames = defaultClassNames;

  const addClassNameIf = (condition, className) => {
    if (condition) {
      classNames.push(className);
    }
  };

  const getClassNames = () => classNames.join(" ");

  return [getClassNames, addClassNameIf];
};
export default x;

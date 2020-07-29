import { useState } from "react";

const useToggle = (defaultState = false) => {
  const [isToggled, setIsToggled] = useState(Boolean(defaultState));

  const toggle = () => setIsToggled(isToggled => !isToggled);

  return [isToggled, toggle];
};

export default useToggle;

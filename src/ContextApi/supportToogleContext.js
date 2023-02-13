import react, { useState, createContext } from "react";

export const SupportToggleContext = createContext();

export const SupportToggleProvider = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <SupportToggleContext.Provider value={[toggle, setToggle]}>
      {props.children}
    </SupportToggleContext.Provider>
  );
};

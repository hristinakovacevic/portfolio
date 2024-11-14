import React, { useContext, createContext, useState } from "react";

const isClickedContext = createContext();

export const ClickedContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  function clickedItem() {
    setIsClicked(!isClicked);
  }
  return (
    <ClickedContextProvider.Provider value={{ isClicked, clickedItem }}>
      {children}
    </ClickedContextProvider.Provider>
  );
};
export default function useClickedContext() {
  return useContext(isClickedContext);
}

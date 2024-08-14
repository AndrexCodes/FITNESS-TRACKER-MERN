import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const UseAppContext = () => useContext(AppContext);

const GlobalContext = ({ children }) => {
  const [token, setToken] = useState(null);
  return <AppContext.Provider value={{token, setToken}}>{children}</AppContext.Provider>;
};

export default GlobalContext;

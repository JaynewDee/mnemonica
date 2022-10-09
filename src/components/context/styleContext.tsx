import React, { useContext, createContext, useState, useMemo } from "react";

const UserContext = createContext({});
const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(`Context cannot be consumed outside of it's provider`);
  }
};
const UserContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>({
    name: `Joshua`,
  });
  const [theme, setTheme] = useState<any>(`blue`);

  const context = useMemo(
    () => ({
      user,
      theme,
      setUser,
      setTheme,
    }),
    [user, theme]
  );
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export { useUserContext, UserContextProvider };

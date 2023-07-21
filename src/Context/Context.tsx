import React, { useState, ReactNode } from "react";

type userTokenContextType = {
  userToken?: string;
  updateToken?: (token: string) => void;
};
const UserContext = React.createContext<userTokenContextType | null>(null);

interface Props {
  children?: ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [userToken, setUsertoken] = useState<string>("");
  const updateToken = (token: string) => {
    setUsertoken(token);
  };
  return (
    <>
      <UserContext.Provider value={{ userToken, updateToken }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
export { UserContext, UserContextProvider };

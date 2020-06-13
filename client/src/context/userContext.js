import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, disPatchUser] = useState("");

  return (
    <UserContext.Provider value={[user, disPatchUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

import React from "react";
import { DBUserContext } from "../context/DBUserProvider";

const useDBUser = () => {
  const context = React.useContext(DBUserContext);
  if (!context) {
    throw new Error('useDBUser must be used within a DBUserProvider');
  }
  return context;
};

export { useDBUser };

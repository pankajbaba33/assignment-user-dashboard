import { createContext, useEffect, useState } from "react";
import { getUsers } from "../services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    
    setUsers(data);
  };

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
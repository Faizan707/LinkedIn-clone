'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import instance from "@/lib/axios";

interface User {
  user_id: string;
  avatar: string;
  email: string;
  full_name: string;
  _id: string;
}

interface UserContextType {
  users: User[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await instance.get("api/users");
        const data = response.data; 

        if (data.users) {
          setUsers(data.users);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

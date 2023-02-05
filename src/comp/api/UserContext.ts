import {createContext} from "react";
import {newUserData, User} from "./User";

export const UserContext = createContext({
    setUserData: (user: User) => {},
    userData: newUserData(),
})
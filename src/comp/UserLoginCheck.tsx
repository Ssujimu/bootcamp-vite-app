import {UserContext} from "./api/UserContext";
import React, {useMemo, useState} from "react";
import {newUserData, User} from "./api/User";

interface Props {
    children: React.ReactNode;
}

export const UserLoginCheck = ({ children }: Props) => {
    //
    const [ userData, setUserData ] = useState<User>(newUserData);

    const value = useMemo(() => ({ setUserData, userData }), [setUserData, userData]);

    return (
        //
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
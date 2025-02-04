import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.init";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        handleRegister,
        user,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }

            return () => {
                unsubscribe();
            };
        });
    }, []);

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;

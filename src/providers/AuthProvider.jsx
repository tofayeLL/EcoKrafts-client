import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

export const AUthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const logOutUser = () => {
        return signOut(auth);
    }
    // update user profile
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }





    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Observe  current user:', currentUser);
            setUser(currentUser);
        })
        return () => {

            unSubscribe

        }

    }, [])

    const userInfo = {
        createUser,
        signInUser,
        user,
        logOutUser,
        updateUser

    }
    return (
        <div>
            <AUthContext.Provider value={userInfo}>
                {
                    children
                }
            </AUthContext.Provider>

        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
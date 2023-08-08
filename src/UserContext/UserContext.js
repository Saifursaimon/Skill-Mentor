import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({ children }) => {

    // states
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    // providers
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // google login
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // github login
    const githubLogIn = () => {
        return signInWithPopup(auth, githubProvider)
    }


    // log out
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // console.log('auth state changed', currentUser)
        })

        return () => { unSubscribe() }
    }, [])


    const authInfo = { loading, user, createUser, logIn, googleLogIn, githubLogIn, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
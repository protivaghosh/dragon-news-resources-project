import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.info";


export const AuthContext=createContext();
const AuthProvider =({children})=> {

    const[user, setUser]=useState(null)
     console.log(user)
    const createNewsUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    };

const userLogin=(email, password)=>{
 return signInWithEmailAndPassword(auth, email, password)
}

    const logOut=()=>{
        return signOut(auth)
      };
      

const authInfo = {
    user,
    setUser,
   createNewsUser,
   logOut,
   userLogin
};


useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, currentUser=>{
   setUser(currentUser);
    });
    return()=>{
        unSubscribe();
    };
}, [])


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
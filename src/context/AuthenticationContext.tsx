import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, User, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { IAuthContext } from "../Types";
import { authenticationService } from "../services/FirebaseService";

const AuthenticationContext = createContext({} as IAuthContext);


export const  useAuth = () => {
    return useContext(AuthenticationContext);
}

// TODO: determine children type
export const AuthenticationContextProvider = ({children}: {children:any}) => {

    const [user, setUser] = useState<null | undefined | User>(null);
    const [stateChangePending, setStateChangePending] = useState(true);
    const [redirect, setRedirect] = useState<Function | null | undefined>(null);

      const signinHandler = async (email: string, password: string, redirect: Function) => {
        await signInWithEmailAndPassword(authenticationService, email, password);
        setRedirect(redirect);
      }
      
      const logoutHandler = () => {
         signOut(authenticationService);
      }
      
      const signupHandler = async (email: string, password: string, redirect: Function) => {
         await createUserWithEmailAndPassword(authenticationService, email, password);
         setRedirect(redirect);
      }

      useEffect(() => {
         const unsubscribe = onAuthStateChanged(authenticationService, (user) => {
          setUser(user);
          setStateChangePending(false);
          redirect && redirect();
        });
        return unsubscribe;
      }, []);

      const contextValue = {
        user,
        isLoggedIn: !!user,
        signin: signinHandler,
        logout: logoutHandler,
        signup: signupHandler
      }
      
    return (
    <AuthenticationContext.Provider value={contextValue}>
        {!stateChangePending && children}
    </AuthenticationContext.Provider>
    );
}

export default AuthenticationContext;

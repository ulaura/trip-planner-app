import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthenticationContext";


const PrivateRoute = ({children}: {children: any}) => {

    const {isLoggedIn} = useAuth();
    if (!isLoggedIn) {
        
       return <Navigate to="/signin" replace/>
    }

    return children;
}

export default PrivateRoute;

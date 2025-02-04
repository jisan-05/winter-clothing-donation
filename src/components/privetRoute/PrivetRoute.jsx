import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user} = useContext(authContext)
    const location = useLocation()

    if(!user){
        return  <Navigate state={{from:location.pathname}} to="/register"></Navigate>;
    }
    
    
    return children;
    
};

export default PrivetRoute;
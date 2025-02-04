import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h4 className='text-6xl font-bold'>Login</h4>
            <h2>If your are new user, <span className='text-blue-600'><Link to='/register'>Register</Link></span></h2>
        </div>
    );
};

export default Login;
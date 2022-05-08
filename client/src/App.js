import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, Route } from 'react-router-dom';
import { authSelector } from './redux/features/auth';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Management from './pages/management';
import Main from './Main';
import Profile from './pages/profile';

function App() {
    const { user } = useSelector(authSelector);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            navigate('/main');
        }
    }, [user?.id]);

    return (
        <>
            <Outlet />
        </>
    );
}

export default App;

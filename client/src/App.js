import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { authSelector } from './redux/features/auth';
import Portal from './Portal';

function App() {
    const { user } = useSelector(authSelector);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            navigate('/main/dashboard');
        }
    }, [user?.id]);

    return (
        <>
            <Outlet />
        </>
    );
}

export default App;

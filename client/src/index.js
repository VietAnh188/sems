import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './root.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Management from './pages/management';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="login" element={<Login />} />
                    <Route path="main" element={<Main />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="management" element={<Management />} />
                    </Route>
                </Route>
            </Routes>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

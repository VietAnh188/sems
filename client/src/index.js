import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './root.scss';
import './assets/customs/styles.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Management from './pages/management';
import Main from './Main';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
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
        </Provider>
    </React.StrictMode>
);

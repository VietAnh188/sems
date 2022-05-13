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
import GlobalStyles from './components/GlobalStyles';
import Profile from './pages/profile';
import ToggleContextProvider from './contexts/toggle/toggleContext';
import SocketProvider from './contexts/socket/socket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <SocketProvider>
                <Provider store={store}>
                    <ToggleContextProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<App />}>
                                    <Route path="login" element={<Login />} />
                                    <Route path="main" element={<Main />}>
                                        <Route
                                            path="dashboard"
                                            element={<Dashboard />}
                                        />
                                        <Route
                                            path="management"
                                            element={<Management />}
                                        />
                                        <Route path="profile">
                                            <Route
                                                path=":id"
                                                element={<Profile />}
                                            />
                                        </Route>
                                    </Route>
                                </Route>
                            </Routes>
                            <App />
                        </BrowserRouter>
                    </ToggleContextProvider>
                </Provider>
            </SocketProvider>
        </GlobalStyles>
    </React.StrictMode>
);

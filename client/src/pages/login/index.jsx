import React, { useEffect, useState, useId, useRef } from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { loginCall } from '../../redux/features/auth';
import Portal from '../../Portal';
import AlertBox from '../../components/AlertBox';
import { authSelector } from '../../redux/features/auth';
import { useToggle } from '../../hooks';

const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

const Login = () => {
    const id = useId();

    const { isError } = useSelector(authSelector);

    const [visible, handleCloseAlert] = useToggle(isError);

    // const [visible, setVisible] = useState(isError);

    const username = useRef();
    const password = useRef();

    const dispatch = useDispatch();

    // useEffect(() => {
    //     setVisible(isError);
    // }, [isError]);

    // const handleCloseAlert = () => {
    //     setVisible(false);
    // };

    const handleLogin = event => {
        event.preventDefault();
        if (username.current.value && password.current.value) {
            const request = {
                username: username.current.value,
                password: password.current.value,
            };
            dispatch(loginCall(request));
        }
    };

    return (
        <>
            <div className={styles.login}>
                <div className={styles.login_left}>
                    <div className={styles.login_left_form}>
                        <div className={styles.login_left_form_wrapper}>
                            <Title>Login</Title>
                            <form>
                                <label htmlFor={id + '-username'}>
                                    Username
                                </label>
                                <input
                                    id={id + '-username'}
                                    type="text"
                                    placeholder="Enter your username"
                                    ref={username}
                                />
                                <label htmlFor={id + '-password'}>
                                    Password
                                </label>
                                <input
                                    id={id + '-password'}
                                    type="password"
                                    placeholder="Enter your password"
                                    ref={password}
                                />
                            </form>
                            <div
                                onClick={handleLogin}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '30px',
                                }}
                            >
                                <Button name="Sign In" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.login_right}>
                    <div style={{ width: '40%', height: '90%' }}>
                        <Logo />
                    </div>
                </div>
            </div>
            <Portal visible={visible}>
                {visible && (
                    <AlertBox
                        color="--error-color"
                        content={{
                            title: 'Login Failed',
                            message: 'Username or Password is incorrect',
                        }}
                        handleCloseAlert={handleCloseAlert}
                    />
                )}
            </Portal>
        </>
    );
};

export default Login;

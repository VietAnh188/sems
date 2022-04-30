import React, { useId } from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

const Login = () => {
    const id = useId();

    return (
        <div className={styles.login}>
            <div className={styles.login_left}>
                <div className={styles.login_left_form}>
                    <div className={styles.login_left_form_wrapper}>
                        <Title>Login</Title>
                        <form>
                            <label htmlFor={id + '-username'}>Username</label>
                            <input
                                id={id + '-username'}
                                type="text"
                                placeholder="Enter your username"
                            />
                            <label htmlFor={id + '-password'}>Password</label>
                            <input
                                id={id + '-password'}
                                type="password"
                                placeholder="Enter your password"
                            />
                        </form>
                        <div
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
    );
};

export default Login;

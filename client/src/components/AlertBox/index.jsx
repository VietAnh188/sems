import React from 'react';
import styles from './styles.module.scss';
import { Box, Wrapper } from '../../StyledComponents';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const AlertBox = ({ category, handleCloseAlert }) => {
    let content;

    if (category.action === 'auth') {
        content = (
            <>
                <div
                    style={{
                        backgroundColor: `${
                            category.type === 'failure'
                                ? 'var(--error-color)'
                                : category.type === 'success'
                                ? 'var(--success-color)'
                                : ''
                        }`,
                    }}
                    className={styles.alert_box_top}
                >
                    {category.type === 'failure'
                        ? 'Login Failed'
                        : category.type === 'success'
                        ? 'Login Success'
                        : ''}
                </div>
                <div
                    style={{
                        color: `${
                            category.type === 'failure'
                                ? 'var(--error-color)'
                                : 'var(--success-color)'
                        }`,
                    }}
                    className={styles.alert_box_bottom}
                >
                    {category.type === 'failure'
                        ? 'Username or Password is incorrect'
                        : category.type === 'success'
                        ? 'Your are welcome'
                        : ''}
                </div>
            </>
        );
    }

    if (category.action === 'notification') {
        content = (
            <>
                <div
                    style={{
                        backgroundColor: `${
                            category.type === 'logout'
                                ? 'var(--warning-color)'
                                : ''
                        }`,
                    }}
                    className={styles.alert_box_top}
                >
                    {category.type === 'logout' ? "Let's Logout" : ''}
                </div>
                <div
                    style={{
                        color: `${
                            category.type === 'logout'
                                ? 'var(--warning-color)'
                                : ''
                        }`,
                    }}
                    className={styles.alert_box_bottom}
                >
                    {category.type === 'logout'
                        ? 'Please Logout to update your new information'
                        : ''}
                </div>
            </>
        );
    }

    return (
        <div className={styles.alert_box}>
            <Box>
                <Wrapper>{content}</Wrapper>
            </Box>
            <span
                className={styles.closeButton}
                onClick={() => handleCloseAlert(false)}
            >
                <AiOutlineCloseCircle style={{ fontSize: '15px' }} />
            </span>
        </div>
    );
};

export default AlertBox;

import React from 'react';
import styles from './styles.module.scss';
import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    font-size: 15px;
    font-weight: bold;
    border: none;
    border-radius: var(--primary-border-radius);
    box-shadow: var(--primary-shadow);
    background-color: #c4c4c4;
`;

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = event => {
        event.preventDefault();
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <Button className={styles.logout} onClick={handleLogout}>
            <FiLogOut className={styles.icon} />
            Logout
        </Button>
    );
};

export default LogoutButton;

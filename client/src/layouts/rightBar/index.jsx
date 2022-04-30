import React from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import { FiMoreHorizontal } from 'react-icons/fi';
import Notification from '../../components/Notification';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const Notifications = styled.div`
    display: flex;
    flex-direction: column;
`;

const RightBar = () => {
    return (
        <div className={styles.rightbar}>
            <div className={styles.rightbar_wrapper}>
                <Header>
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Notifications
                    </span>
                    <FiMoreHorizontal className={styles.icon} />
                </Header>
                <Notifications>
                    <Notification
                        type="birthday"
                        date="18/8/2001"
                        title="happy birthday to vietanh, happy birthday to you"
                    />
                    <Notification
                        type="anniversary"
                        date="18/8/2001"
                        title="happy anniversary to vietanh, happy anniversary to you"
                    ></Notification>
                </Notifications>
            </div>
        </div>
    );
};

export default RightBar;

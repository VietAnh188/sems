import React from 'react';
import styles from './styles.module.scss';
import styled from 'styled-components';
import { BsStar } from 'react-icons/bs';
import { RiCake2Line } from 'react-icons/ri';
import { BiError } from 'react-icons/bi';

const Date = styled.span`
    color: var(--primary-text-color);
    font-size: 12px;
    font-weight: bold;
`;

const Title = styled.span`
    overflow: hidden !important;
    text-overflow: ellipsis;
`;

const Notification = ({ type, date, title }) => {
    return (
        <div className={styles.notification}>
            <div className={styles.notification_wrapper}>
                <div
                    style={{
                        backgroundColor:
                            type === 'anniversary'
                                ? '#BAFFA9'
                                : type === 'birthday'
                                ? '#FDA9FF'
                                : '#FF7777',
                    }}
                    className={styles.notification_wrapper_icon}
                >
                    {type === 'anniversary' ? (
                        <BsStar />
                    ) : type === 'birthday' ? (
                        <RiCake2Line />
                    ) : (
                        <BiError />
                    )}
                </div>
                <div className={styles.notification_wrapper_content}>
                    <Date>{date}</Date>
                    <Title>{title}</Title>
                </div>
            </div>
        </div>
    );
};

export default Notification;

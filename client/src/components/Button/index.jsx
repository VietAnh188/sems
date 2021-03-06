import React from 'react';
import styles from './styles.module.scss';

const Button = ({ name }) => {
    return <button className={styles.button}>{name}</button>;
};

export default Button;

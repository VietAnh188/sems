import React from 'react';
import styles from './styles.module.scss';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.logo_outside}>
                <div
                    className={`${styles.logo_outside_dot} ${styles.dot}`}
                ></div>
            </div>
            <div className={styles.logo_inside}>
                <div
                    className={`${styles.logo_inside_dot} ${styles.dot}`}
                ></div>
            </div>
        </div>
    );
};

export default Logo;

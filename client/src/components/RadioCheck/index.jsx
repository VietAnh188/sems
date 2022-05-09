import React, { useId } from 'react';
import styles from './styles.module.scss';

const RadioCheck = ({ type, value, currentState, handleChange }) => {
    const id = useId();

    return (
        <div className={styles.radio_check}>
            <input
                type={type}
                name={value}
                id={id + `-${value}`}
                value={value}
                checked={currentState === value}
                onChange={handleChange}
            />
            <label
                htmlFor={id + `-${value}`}
                style={{ textTransform: 'capitalize' }}
            >
                {value}
            </label>
        </div>
    );
};

export default RadioCheck;

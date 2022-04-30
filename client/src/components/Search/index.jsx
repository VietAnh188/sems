import React from 'react';
import styles from './styles.module.scss';
import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Enter something..." />
            <BiSearchAlt className={styles.icon} />
        </div>
    );
};

export default Search;

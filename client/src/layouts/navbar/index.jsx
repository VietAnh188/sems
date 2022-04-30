import React from 'react';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import styles from './styles.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_wrapper}>
                <div style={{ flex: 1 }}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                </div>
                <div
                    style={{
                        flex: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div className={styles.search}>
                        <Search />
                    </div>
                </div>
                <div style={{ flex: 1 }}></div>
            </div>
        </nav>
    );
};

export default Navbar;

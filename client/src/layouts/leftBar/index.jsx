import React from 'react';
import styles from './styles.module.scss';
import { DImages } from '../../default';
import styled from 'styled-components';
import avatar from '../../assets/imgs/avatarDefault.png';
import { CgProfile } from 'react-icons/cg';
import { RiDashboardLine } from 'react-icons/ri';
import { FiDatabase } from 'react-icons/fi';
import { MdOutlineBugReport } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import LogoutButton from '../../components/logoutButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/features/auth';

const Username = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const Role = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: var(--primary-text-color);
`;

const LeftBar = () => {
    const {
        user: {
            username,
            person: { id, first_name, last_name, roles },
        },
    } = useSelector(authSelector);

    return (
        <div className={styles.leftbar}>
            <div className={styles.leftbar_wrapper}>
                <div className={styles.leftbar_wrapper_info}>
                    <img src={DImages + 'avatarDefault.png'} alt="avatar" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Username>
                            {first_name && last_name
                                ? `${first_name} ${last_name}`
                                : username}
                        </Username>
                        <Role>
                            {roles.map(role => (
                                <span key={role.id}>{role.name}</span>
                            ))}
                        </Role>
                    </div>
                </div>
                <div className={styles.leftbar_wrapper_feature}>
                    <ul>
                        <Link to={`profile/${id}`} className={styles.link}>
                            <li>
                                <CgProfile className={styles.icon} />
                                Profile
                            </li>
                        </Link>
                        <Link to="dashboard" className={styles.link}>
                            <li>
                                <RiDashboardLine className={styles.icon} />
                                Dashboards
                            </li>
                        </Link>
                        <Link to="management" className={styles.link}>
                            <li>
                                <FiDatabase className={styles.icon} />
                                Managements
                            </li>
                        </Link>
                        <Link to="report" className={styles.link}>
                            <li>
                                <MdOutlineBugReport className={styles.icon} />
                                Reports
                            </li>
                        </Link>
                        <Link to="setting" className={styles.link}>
                            <li>
                                <AiOutlineSetting className={styles.icon} />
                                Settings
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.logout}>
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
};

export default LeftBar;

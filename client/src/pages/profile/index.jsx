import React from 'react';
import styles from './styles.module.scss';
import styled from 'styled-components';
import { Box } from '../../StyledComponents';
import { DImages } from '../../default';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/features/auth';

const Name = styled.span`
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
`;

const Role = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: var(--primary-text-color);
`;

const Email = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: var(--primary-text-color);
`;

const Description = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: var(--primary-text-color);
`;

const Profile = () => {
    const {
        user: { id, username, email, person },
    } = useSelector(authSelector);

    return (
        <>
            <div className={styles.profile_top}>
                <Box
                    style={{
                        flex: 1,
                        marginRight: '10px',
                        height: '200px',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={DImages + 'avatarDefault.png'}
                        className={styles.profile_top_avatar}
                    />
                </Box>
                <div style={{ flex: 3, marginLeft: '10px' }}>
                    <div className={styles.profile_top_info}>
                        <Name>
                            {person
                                ? `${person.first_name} ${person.last_name}`
                                : username}
                        </Name>
                        <span
                            style={{ marginLeft: '20px', fontWeight: 'bold' }}
                        >
                            {person
                                ? `PersonId: ${person.id}`
                                : `AccountId: ${id}`}
                        </span>
                    </div>
                    <div className={styles.profile_top_info}>
                        <Role>{person ? person.roles[0].name : 'No Role'}</Role>
                    </div>
                    <div className={styles.profile_top_info}>
                        <Email>{email}</Email>
                    </div>
                    <div className={styles.profile_top_info}>
                        <Description>
                            {person.description || 'No Description'}
                        </Description>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

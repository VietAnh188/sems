import React from 'react';
import styles from './styles.module.scss';
import styled from 'styled-components';
import { Container, Wrapper, Box } from '../../StyledComponents';
import { DImages } from '../../default';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/features/auth';
import { FaUmbrellaBeach } from 'react-icons/fa';

const Name = styled.span`
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
`;

const Department = styled.span`
    font-size: 18px;
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

const DetailContainer = styled.span`
    display: flex;
    align-items: center;
    column-gap: 10px;
`;

const Detail = styled.p`
    font-size: 15px;
    font-weight: bold;
    margin: 0;
`;

const Profile = () => {
    const {
        user: { id, username, email, person },
    } = useSelector(authSelector);

    return (
        <Container>
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
                        alt="avatar"
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
                        <Department>
                            {
                                // update api to response department
                            }
                        </Department>
                    </div>
                    <div className={styles.profile_top_info}>
                        <Role>
                            {person.roles ? person.roles[0].name : 'No Role'}
                        </Role>
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
            <div className={styles.profile_middle}>
                <span style={{ flex: 1 }}></span>
                <span style={{ flex: 1 }}>
                    <Box>
                        <Wrapper>
                            <div className={styles.profile_middle_item_top}>
                                <span>Total salary</span>
                            </div>
                            <div className={styles.profile_middle_item_bottom}>
                                {person ? person.salary : 'No Salary'}
                            </div>
                        </Wrapper>
                    </Box>
                </span>
                <span style={{ flex: 1 }}>
                    <Box>
                        <Wrapper>
                            <div className={styles.profile_middle_item_top}>
                                <span>Total vacation</span>
                            </div>
                            <div className={styles.profile_middle_item_bottom}>
                                <FaUmbrellaBeach className={styles.icon} />
                                {person
                                    ? `${person.vacation} / 10`
                                    : 'No Vacation'}
                            </div>
                        </Wrapper>
                    </Box>
                </span>
                <span style={{ flex: 1 }}></span>
            </div>
            {person && (
                <div className={styles.profile_bottom}>
                    <span style={{ flex: 1 }}></span>
                    <span style={{ flex: 2 }}>
                        <Box>
                            <Wrapper
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: '10px',
                                }}
                            >
                                <DetailContainer>
                                    <Detail>Gender:</Detail>
                                    {person.gender}
                                </DetailContainer>
                                <DetailContainer>
                                    <Detail>Address:</Detail>
                                    {person.address || 'No Address'}
                                </DetailContainer>
                                <DetailContainer>
                                    <Detail>Ethnicity:</Detail>
                                    {
                                        // create new api to response ethnicity
                                    }
                                </DetailContainer>
                                <DetailContainer>
                                    <Detail>Phone number:</Detail>
                                    {person.phone_number || 'No Phone Number'}
                                </DetailContainer>
                                <DetailContainer>
                                    <Detail>Birthday:</Detail>
                                    {person.birthday || 'No Birthday'}
                                </DetailContainer>
                                <DetailContainer>
                                    <Detail>Hiring date:</Detail>
                                    {person.hiring_date || 'No Hiring Date'}
                                </DetailContainer>
                            </Wrapper>
                        </Box>
                    </span>
                    <span style={{ flex: 1 }}></span>
                </div>
            )}
        </Container>
    );
};

export default Profile;

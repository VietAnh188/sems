import React, { useState, useTransition, useId, useRef } from 'react';
import styles from './styles.module.scss';
import styled from 'styled-components';
import { Box, Wrapper } from '../../StyledComponents';
import RadioCheck from '../RadioCheck';
import Button from '../Button';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/features/auth';

const Detail = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    column-gap: 10px;
`;

const Label = styled.label`
    font-weight: bold;
    flex: 1;
`;

const EditProfileBox = ({ handleOpen }) => {
    const id = useId();

    const {
        user: {
            person: { id: currentPersonId },
        },
    } = useSelector(authSelector);

    const firstName = useRef();
    const lastName = useRef();
    const descripton = useRef();
    const address = useRef();
    const phoneNumber = useRef();
    const birthday = useRef();

    const [isPending, startTransition] = useTransition();

    const [selectedGender, setSelectedGender] = useState('');

    const genders = ['male', 'female', 'other'];

    const handleChangeSelect = event => {
        startTransition(() => {
            setSelectedGender(event.target.value);
        });
    };

    const handleSave = async () => {
        try {
            const request = {
                ...(firstName.current.value && {
                    first_name: firstName.current.value,
                }),
                ...(lastName.current.value && {
                    last_name: lastName.current.value,
                }),
                ...(descripton.current.value && {
                    description: descripton.current.value,
                }),
                ...(address.current.value && {
                    address: address.current.value,
                }),
                ...(phoneNumber.current.value && {
                    phone_number: phoneNumber.current.value,
                }),
                ...(birthday.current.value && {
                    birthday: birthday.current.value,
                }),
                ...(selectedGender && { gender: selectedGender }),
            };
            await axios.put(`/person/${currentPersonId}`, request);
            handleOpen(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleExit = () => {
        handleOpen(false);
    };

    return (
        <div className={styles.editprofile_box}>
            <Box>
                <Wrapper
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '20px',
                    }}
                >
                    <form
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '10px',
                        }}
                    >
                        <fieldset
                            className={styles.editprofile_box_fieldset_gender}
                        >
                            <legend style={{ fontWeight: 'bold' }}>
                                Select your gender:
                            </legend>
                            {genders.map(gender => (
                                <RadioCheck
                                    key={gender}
                                    type="radio"
                                    value={gender}
                                    currentState={selectedGender}
                                    handleChange={handleChangeSelect}
                                />
                            ))}
                        </fieldset>
                        <Detail>
                            <Label htmlFor={id + '-firstname'}>
                                First name:
                            </Label>
                            <input
                                ref={firstName}
                                style={{ flex: 2 }}
                                type="text"
                                placeholder="enter your first name"
                                id={id + '-firstname'}
                            />
                        </Detail>
                        <Detail>
                            <Label htmlFor={id + '-lastname'}>Last name:</Label>
                            <input
                                ref={lastName}
                                style={{ flex: 2 }}
                                type="text"
                                placeholder="enter your last name"
                                id={id + '-lastname'}
                            />
                        </Detail>
                        <Detail>
                            <Label htmlFor={id + '-description'}>
                                Description:
                            </Label>
                            <textarea
                                ref={descripton}
                                style={{ flex: 2 }}
                                name="description"
                                id={id + '-description'}
                                placeholder="enter your description"
                                rows="5"
                            />
                        </Detail>
                        <Detail>
                            <Label htmlFor={id + '-address'}>Address:</Label>
                            <input
                                ref={address}
                                type="text"
                                placeholder="enter your address"
                                style={{ flex: 2 }}
                            />
                        </Detail>
                        <Detail>
                            <Label htmlFor={id + '-phone_number'}>
                                Phone number:
                            </Label>
                            <input
                                ref={phoneNumber}
                                type="text"
                                placeholder="123-456-7890"
                                style={{ flex: 2 }}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            />
                        </Detail>
                        <Detail>
                            <Label htmlFor={id + '-birthday'}>Birthday:</Label>
                            <input
                                ref={birthday}
                                style={{ flex: 2 }}
                                type="date"
                                name="birthday"
                                id={id + '-birthday'}
                            />
                        </Detail>
                    </form>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <div onClick={handleSave}>
                            <Button name="Save" onClick />
                        </div>
                        <div onClick={handleExit}>
                            <Button name="Exit" />
                        </div>
                    </div>
                </Wrapper>
            </Box>
        </div>
    );
};

export default EditProfileBox;

import React, { useState, useTransition, useId } from 'react';
import styles from './styles.module.scss';
import styled from 'styled-components';
import { Box, Wrapper } from '../../StyledComponents';
import RadioCheck from '../RadioCheck';
import Button from '../Button';

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

const EditProfileBox = () => {
    const id = useId();

    const [isPending, startTransition] = useTransition();

    const [selectedGender, setSelectedGender] = useState('');

    const genders = ['male', 'female', 'other'];

    const handleChangeSelect = event => {
        startTransition(() => {
            setSelectedGender(event.target.value);
        });
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
                                style={{ flex: 2 }}
                                type="text"
                                placeholder="enter your first name"
                                id={id + '-firstname'}
                            />
                        </Detail>
                        <Detail>
                            <Label htmlFor={id + '-lastname'}>Last name:</Label>
                            <input
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
                                type="text"
                                placeholder="123-456-7890"
                                style={{ flex: 2 }}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            />
                        </Detail>
                        <Detail>
                            <Label htmlFor={id + '-birthday'}>Birthday:</Label>
                            <input
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
                        <Button name="Save" />
                        <Button name="Exit" />
                    </div>
                </Wrapper>
            </Box>
        </div>
    );
};

export default EditProfileBox;

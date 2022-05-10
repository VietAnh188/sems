import React from 'react';
import styles from './styles.module.scss';
import { Box, Wrapper } from '../../StyledComponents';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const AlertBox = ({ color, content, handleCloseAlert }) => {
    return (
        <div className={styles.alert_box}>
            <Box>
                <Wrapper>
                    <div
                        style={{
                            backgroundColor: `var(${color})`,
                        }}
                        className={styles.alert_box_top}
                    >
                        {content.title}
                    </div>
                    <div
                        style={{
                            color: `var(${color})`,
                        }}
                        className={styles.alert_box_bottom}
                    >
                        {content.message}
                    </div>
                </Wrapper>
            </Box>
            <span
                className={styles.closeButton}
                onClick={() => handleCloseAlert(false)}
            >
                <AiOutlineCloseCircle style={{ fontSize: '15px' }} />
            </span>
        </div>
    );
};

export default AlertBox;

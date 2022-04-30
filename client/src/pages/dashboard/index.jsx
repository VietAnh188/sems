import React from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import SalaryChart from '../../components/SalaryChart';
import BenefitChart from '../../components/BenefitChart';
import GenderChart from '../../components/GenderChart';

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const One = styled.div`
    flex: 1;
`;

const Two = styled.div`
    flex: 2;
`;

const Dashboard = () => {
    return (
        <>
            <Row className={styles.margin_bottom}>
                <Two
                    style={{
                        marginRight: '10px',
                    }}
                    className={styles.box}
                >
                    <SalaryChart />
                </Two>
                <One style={{ marginLeft: '10px' }} className={styles.box}>
                    <BenefitChart />
                </One>
            </Row>
            <Row className={styles.margin_bottom}>
                <One className={styles.box}>
                    <GenderChart />
                </One>
            </Row>
            <Row className={styles.margin_bottom}>
                <One className={styles.box}>4</One>
            </Row>
            <Row className={styles.margin_bottom}>
                <One className={styles.box}>5</One>
            </Row>
            <Row>
                <One className={styles.box}>6</One>
            </Row>
        </>
    );
};

export default Dashboard;

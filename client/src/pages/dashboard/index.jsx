import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import SalaryChart from '../../components/SalaryChart';
import BenefitChart from '../../components/BenefitChart';
import GenderChart from '../../components/GenderChart';
import EthnicityChart from '../../components/EthnicityChart';
import axios from 'axios';

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
    const [groupGender, setGroupGender] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/department/getallgroupgender');
            const result = data.map(item => {
                for (const key in item) {
                    if (Array.isArray(item[key])) {
                        item[key] = item[key].length;
                    }
                }
                return item;
            });
            setGroupGender(result);
        })();
    }, []);

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
                    <GenderChart data={groupGender} />
                </One>
            </Row>
            <Row className={styles.margin_bottom}>
                <One className={styles.box}>
                    <EthnicityChart />
                </One>
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
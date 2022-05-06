import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import SalaryChart from '../../components/SalaryChart';
import BenefitChart from '../../components/BenefitChart';
import GenderChart from '../../components/GenderChart';
import EthnicityChart from '../../components/EthnicityChart';
import axios from 'axios';
import WorkingTypeChart from '../../components/WorkingTypeChart';

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
    const [groupWorkingType, setGroupWorkingType] = useState([]);
    const [groupHiring, setGroupHiring] = useState([]);

    const fetchGroupDataWithLength = async api => {
        const { data } = await axios.get(api);
        const result = data.map(item => {
            for (const key in item) {
                if (Array.isArray(item[key])) item[key] = item[key].length;
            }
            return item;
        });
        return result;
    };

    const fetchGroupDataWithTotal = async api => {
        const { data } = await axios.get(api);
        const result = data.map(item => {
            for (const key in item) {
                if (Array.isArray(item[key])) {
                    item[key] = item[key].reduce((prev, curr) => {
                        const money = curr.salary.split('$');
                        if (money[1].includes(',')) {
                            curr.salary = Number(money[1].replace(',', ''));
                        } else {
                            curr.salary = Number(money[1]);
                        }
                        return prev + curr.salary;
                    }, 0);
                }
            }
            return item;
        });
        return result;
    };

    useEffect(() => {
        fetchGroupDataWithLength('/department/groupgender')
            .then(data => setGroupGender(data))
            .catch(error => console.log(error));
        fetchGroupDataWithLength('/department/groupworkingtype')
            .then(data => setGroupWorkingType(data))
            .catch(error => console.log(error));
        fetchGroupDataWithTotal('/person/grouphiring')
            .then(data => setGroupHiring(data))
            .catch(error => console.log(error));
    }, []);

    console.log(groupHiring);

    return (
        <>
            <Row className={styles.margin_bottom}>
                <Two
                    style={{
                        marginRight: '10px',
                    }}
                    className={styles.box}
                >
                    <SalaryChart data={groupHiring} />
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
                    <WorkingTypeChart data={groupWorkingType} />
                </One>
            </Row>
            <Row className={styles.margin_bottom}>
                <One className={styles.box}>
                    <EthnicityChart />
                </One>
            </Row>
            <Row>
                <One className={styles.box}>6</One>
            </Row>
        </>
    );
};

export default Dashboard;

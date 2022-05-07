import React from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import SalaryChart from '../../components/SalaryChart';
import BenefitChart from '../../components/BenefitChart';
import GenderChart from '../../components/GenderChart';
import EthnicityChart from '../../components/EthnicityChart';
import WorkingTypeChart from '../../components/WorkingTypeChart';
import { useGroupWithLength, useGroupWithTotal } from '../../hooks';

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
    const groupGender = useGroupWithLength({
        api: '/department/group/gender',
    });
    const groupWorkingType = useGroupWithLength({
        api: '/department/group/workingtype',
    });
    const groupHiring = useGroupWithTotal({
        api: '/person/group/hiring',
    });
    const groupEthnicity = useGroupWithLength({
        api: '/ethnicity/all/persons',
    });

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
                    <EthnicityChart data={groupEthnicity} />
                </One>
            </Row>
            <Row>
                <One className={styles.box}>6</One>
            </Row>
        </>
    );
};

export default Dashboard;

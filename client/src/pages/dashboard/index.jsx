import React from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import SalaryChart from '../../components/SalaryChart';
import BenefitChart from '../../components/BenefitChart';
import GenderChart from '../../components/GenderChart';
import EthnicityChart from '../../components/EthnicityChart';
import WorkingTypeChart from '../../components/WorkingTypeChart';
import { useGroupWithLength, useGroupWithTotal } from '../../hooks';
import { Container, Box } from '../../StyledComponents';

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
        <Container>
            <Row style={{ gap: '20px' }}>
                <Two>
                    <Box>
                        <SalaryChart data={groupHiring} />
                    </Box>
                </Two>
                <One>
                    <Box>
                        <BenefitChart />
                    </Box>
                </One>
            </Row>
            <Row>
                <One>
                    <Box>
                        <GenderChart data={groupGender} />
                    </Box>
                </One>
            </Row>
            <Row>
                <One>
                    <Box>
                        <WorkingTypeChart data={groupWorkingType} />
                    </Box>
                </One>
            </Row>
            <Row>
                <One>
                    <Box>
                        <EthnicityChart data={groupEthnicity} />
                    </Box>
                </One>
            </Row>
            <Row>
                <One>6</One>
            </Row>
        </Container>
    );
};

export default Dashboard;

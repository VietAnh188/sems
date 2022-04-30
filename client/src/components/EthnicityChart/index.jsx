import React from 'react';
import styles from './styles.module.scss';
import {
    ResponsiveContainer,
    ComposedChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from 'recharts';
import { Wrapper, Title } from '../../StyledComponents';
import { ethnicity } from '../../dummy';

const EthnicityChart = () => {
    return (
        <Wrapper>
            <Title>Ethnicity</Title>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                    layout="vertical"
                    data={ethnicity}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" barSize={20} fill="#00CA20" />
                </ComposedChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default EthnicityChart;

import React from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import { Wrapper, Title } from '../../StyledComponents';
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from 'recharts';

const GenderChart = ({ data }) => {
    return (
        <Wrapper>
            <Title>Gender</Title>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="male" fill="#8884d8" />
                    <Bar dataKey="female" fill="#82ca9d" />
                    <Bar dataKey="other" fill="#82ca1a" />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default GenderChart;

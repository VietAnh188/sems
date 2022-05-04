import React from 'react';
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
import { Wrapper, Title } from '../../StyledComponents';
import { workingType } from '../../dummy';

const WorkingTypeChart = ({ data }) => {
    return (
        <Wrapper>
            <Title>Working type</Title>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data || workingType}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={50}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="full-time" stackId="a" fill="#8884d8" />
                    <Bar dataKey="part-time" stackId="a" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default WorkingTypeChart;

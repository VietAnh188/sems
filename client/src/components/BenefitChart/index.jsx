import React from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { benefit } from '../../dummy';
import { Wrapper, Title } from '../../StyledComponents';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const BenefitChart = () => {
    return (
        <Wrapper>
            <Title>Benefit</Title>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie
                        data={benefit}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {benefit.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default BenefitChart;

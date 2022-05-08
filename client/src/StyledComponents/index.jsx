import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;

export const Wrapper = styled.div`
    padding: 10px;
`;

export const Title = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
`;

export const Box = styled.div`
    border-radius: var(--primary-border-radius);
    box-shadow: var(--primary-shadow);
`;

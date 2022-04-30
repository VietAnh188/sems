import React from 'react';
import styled from 'styled-components';
import LeftBar from './layouts/leftBar';
import RightBar from './layouts/rightBar';
import Navbar from './layouts/navbar';
import { Outlet } from 'react-router-dom';

const AppMain = styled.div`
    width: 100%;
    padding-bottom: 20px;
`;

const AppBody = styled.div`
    display: flex;
    width: 95%;
    margin: auto;
    height: 100%;
    margin-top: calc(var(--navbar-height) + 20px);
`;

const AppBodyContent = styled.div`
    width: 100%;
    height: 100%;
    border-radius: var(--primary-border-radius);
    box-shadow: var(--primary-shadow);
`;

const Main = () => {
    return (
        <AppMain>
            <Navbar />
            <AppBody>
                <div style={{ flex: 1 }}>
                    <LeftBar />
                </div>
                <div style={{ flex: 3, margin: '0 20px' }}>
                    <AppBodyContent>
                        <div style={{ padding: '20px' }}>
                            <Outlet />
                        </div>
                    </AppBodyContent>
                </div>
                <div style={{ flex: 1 }}>
                    <RightBar />
                </div>
            </AppBody>
        </AppMain>
    );
};

export default Main;

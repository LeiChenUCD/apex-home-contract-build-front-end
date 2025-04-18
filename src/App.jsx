import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { SideBar } from './components/SIdeBar';
import { MainContent } from './components/MainContent/MainContent';

function App() {
    return (
        <div
            style={{
                width: 'calc(100vw - 10px)',
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    width: 'min(calc(100vw - 10px), 1400px)',
                    // border: '1px solid black',
                    // borderLeft: '1px solid black',
                    // borderRight: '1px solid black',
                    height: 'calc(100vh - 10px)',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <div style={{ width: '33.3%', height: '100%' }}>
                    <SideBar />
                </div>

                <div
                    style={{
                        width: '66.6%',
                        maxHeight: 'calc(100vh - 10px)',
                        overflowY: 'auto',
                        scrollbarWidth: 'none',
                    }}
                >
                    <MainContent />
                </div>
            </div>
        </div>
    );
}

export default App;

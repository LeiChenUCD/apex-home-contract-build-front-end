import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BottomBar } from './components/SideBar';
import { MainContent } from './components/MainContent/MainContent';
import { TopBar } from './components/SideBar';
import { useIsPhoneSize } from './hooks/useIsPhoneSize';
import { useView } from './hooks/GlobalMap';
import { useEffect, useRef } from 'react';

function App() {
    const { view } = useView();
    const isPhone = useIsPhoneSize();
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [view]);
    return (
        <div
            style={{
                width: 'calc(100vw - 10px)',
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
                height: !isPhone ? 'calc(100vh - 10px)' : window.innerHeight - 10,
            }}
        >
            <div
                style={{
                    width: 'min(calc(100vw - 10px), 1400px)',
                    // border: '1px solid black',
                    // borderLeft: '1px solid black',
                    // borderRight: '1px solid black',
                    height: !isPhone ? 'calc(100vh - 10px)' : window.innerHeight - 10,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div style={{}}>
                    <TopBar />
                </div>
                <div
                    ref={scrollRef}
                    style={{
                        // maxHeight: 'calc(100vh - 10px)',
                        overflowY: 'auto',
                        scrollbarWidth: 'none',
                    }}
                >
                    <MainContent />
                </div>
                <div style={{}}>
                    <BottomBar />
                </div>
            </div>
        </div>
    );
}

export default App;

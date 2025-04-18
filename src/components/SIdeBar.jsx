import { CustomizedButton } from './CustomizedButton';
import { useView } from '../GlobalContext';
import { useEffect } from 'react';
import ApexHomes from '../assets/ApexHomes.png';
import Input from 'antd/es/input/Input';
export function SideBar() {
    const { view, changeView } = useView();

    const buttonWidth = '250px';
    return (
        <div
            style={{
                // border: '1px solid black',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div>
                <img
                    src={ApexHomes}
                    style={{ width: '150px', marginTop: '40px', marginLeft: '55px' }}
                ></img>
            </div>
            <div style={{ height: '100%', alignContent: 'center' }}>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    {/* tab switch buttons */}
                    <div>
                        <CustomizedButton
                            width={buttonWidth}
                            text={'Standard Content'}
                            callback={() => changeView('Standard Content')}
                            backgroundColor={
                                view.toLowerCase() === 'standard content'
                                    ? '#AFFFBB'
                                    : 'RGB(234, 234, 234)'
                            }
                        />

                        <CustomizedButton
                            width={buttonWidth}
                            text={'Optional Upgrades'}
                            callback={() => changeView('Optional Upgrades')}
                            backgroundColor={
                                view.toLowerCase() === 'optional upgrades'
                                    ? '#AFFFBB'
                                    : 'RGB(234, 234, 234)'
                            }
                        />

                        <CustomizedButton
                            width={buttonWidth}
                            text={'Additional Cost & Services'}
                            callback={() => changeView('Additional Cost & Services')}
                            backgroundColor={
                                view.toLowerCase() === 'additional cost & services'
                                    ? '#AFFFBB'
                                    : 'RGB(234, 234, 234)'
                            }
                        />
                    </div>

                    {/* total cost & export */}
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginTop: '30px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '250px',
                                marginBottom: '10px',
                            }}
                        >
                            <div style={{ fontSize: '16px' }}>Total Cost</div>
                            <Input placeholder="$150,000" style={{ width: '150px' }} />
                        </div>
                        <CustomizedButton
                            width={buttonWidth}
                            text={'Export'}
                            callback={() => changeView('Additional Cost & Services')}
                            backgroundColor={'#AFFFBB'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

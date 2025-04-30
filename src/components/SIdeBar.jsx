import { CustomizedButton } from './CustomizedButton';
import { useView } from '../hooks/GlobalMap';
import { useEffect } from 'react';
import ApexHomes from '../assets/ApexHomes.png';
import Input from 'antd/es/input/Input';
import { useGlobalMap } from '../hooks/GlobalMap';
import { fileApi } from '../api/files';

const buttonWidth = '250px';

export function TopBar() {
    const { view, changeView } = useView();
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <img
                        src={ApexHomes}
                        style={{ width: '150px', marginTop: '20px', marginLeft: '25px' }}
                    ></img>
                </div>
                {/* tab switch buttons */}
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
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
                        text={'Additional Cost & Services'}
                        callback={() => changeView('Additional Cost & Services')}
                        backgroundColor={
                            view.toLowerCase() === 'additional cost & services'
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
                </div>
                <div style={{ width: '175px' }}></div>
            </div>
        </>
    );
}

export function SideBar() {
    const { globalContractMap, setGlobalMapValue } = useGlobalMap();

    // console.log('globalMap', globalContractMap);

    function viewFile() {
        fetch(`${import.meta.env.VITE_API_ENDPOINT}${fileApi.file.getTemplate}`, {
            method: 'POST', // Use POST to send data
            headers: {
                'Content-Type': 'application/json', // Specify JSON content type
            },
            body: JSON.stringify(globalContractMap), // Convert the payload to a JSON string
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch PDF');
                }
                return response.blob(); // Convert the response to a Blob
            })
            .then((blob) => {
                // Create a temporary URL for the Blob
                const url = URL.createObjectURL(blob);

                // Open the PDF in a new tab
                const newTab = window.open(url, '_blank');

                if (newTab) {
                    newTab.focus(); // Focus on the new tab
                } else {
                    alert('Please allow popups for this site');
                }

                // Optionally, revoke the URL after usage to release memory
                setTimeout(() => URL.revokeObjectURL(url), 1000);
            })
            .catch((error) => {
                console.error('Error fetching PDF:', error);
            });
    }

    function downloadPDF() {
        fetch(`${import.meta.env.VITE_API_ENDPOINT}${fileApi.file.getTemplate}`, {
            method: 'POST', // Use POST to send data
            headers: {
                'Content-Type': 'application/json', // Specify JSON content type
            },
            body: JSON.stringify(globalContractMap), // Convert the payload to a JSON string
        })
            .then((res) => res.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'draft.pdf'; // sets download filename
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            })
            .catch((err) => {
                alert('Download failed: ' + err.message);
            });
    }

    return (
        <div
            style={{
                // border: '1px solid black',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div style={{ height: '100%', alignContent: 'center' }}>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    {/* total cost & export */}
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div style={{ fontSize: '16px', marginRight: '10px' }}>Total Cost</div>
                            <Input placeholder="$150,000" style={{ width: '150px' }} />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div style={{ fontSize: '16px', marginRight: '10px' }}>Discount</div>
                            <Input placeholder="$150,000" style={{ width: '150px' }} />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div style={{ fontSize: '16px', marginRight: '10px' }}>
                                Price After Discount
                            </div>
                            <Input placeholder="$150,000" style={{ width: '150px' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <CustomizedButton
                                width={buttonWidth.replace('px', '') / 2 + 'px'}
                                text={'Preview'}
                                callback={() => viewFile()}
                                backgroundColor={'#AFFFBB'}
                            />

                            <CustomizedButton
                                width={buttonWidth.replace('px', '') / 2 + 'px'}
                                text={'Download'}
                                callback={() => downloadPDF()}
                                backgroundColor={'#AFFFBB'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

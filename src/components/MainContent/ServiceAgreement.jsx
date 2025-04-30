import { Input, DatePicker } from 'antd';
import { useGlobalMap } from '../../hooks/GlobalMap';
export function ServiceAgreement() {
    const { globalContractMap, setGlobalContractMapValue } = useGlobalMap();
    const contractMapBasePath = ['main'];
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '80px',
            }}
        >
            <div style={{ width: '500px' }}>
                <div style={{ fontSize: '30px', margin: '0px 0 50px 0' }}>
                    Design-Build Services Agreement
                </div>
                <div style={{ marginBottom: '10px' }}>Contact Number</div>
                <Input
                    onChange={(e) =>
                        setGlobalContractMapValue(
                            [...contractMapBasePath, 'contactNumber'],
                            e.target.value
                        )
                    }
                />
                <div style={{ marginBottom: '10px', marginTop: '20px' }}>Effective Date</div>
                <DatePicker
                    style={{ width: '500px' }}
                    onChange={(date, dateString) =>
                        setGlobalContractMapValue(
                            [...contractMapBasePath, 'effectiveDate'],
                            dateString
                        )
                    }
                />
            </div>
        </div>
    );
}

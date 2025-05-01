import { Input, DatePicker } from 'antd';
import { useGlobalMap } from '../../hooks/GlobalMap';
import { useIsPhoneSize } from '../../hooks/useIsPhoneSize';
export function ServiceAgreement() {
    const isPhone = useIsPhoneSize();
    const { globalContractMap, setGlobalContractMapValue } = useGlobalMap();
    const contractMapBasePath = ['main'];
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '20px',
            }}
        >
            <div style={{ width: !isPhone ? '500px' : '100%' }}>
                <div style={{ fontSize: !isPhone ? '30px' : '25px', margin: '0px 0 20px 0' }}>
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
                    style={{ width: !isPhone ? '500px' : '100%' }}
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

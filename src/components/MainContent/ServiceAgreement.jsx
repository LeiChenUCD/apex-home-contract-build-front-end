import { Input } from 'antd';
export function ServiceAgreement() {
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
                <div style={{ fontSize: '30px', margin: '70px 0 50px 0' }}>
                    Design-Build Services Agreement
                </div>
                <div style={{ marginBottom: '10px' }}>Contact Number</div>
                <Input />
                <div style={{ marginBottom: '10px', marginTop: '20px' }}>Effective Date</div>
                <Input />
            </div>
        </div>
    );
}

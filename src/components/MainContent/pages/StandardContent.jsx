import { Input } from 'antd';
export function StandardContent() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '100px',
            }}
        >
            <div style={{ width: '450px' }}>
                <div style={{ fontSize: '30px', margin: '0px 0 30px 0' }}>Standard Content</div>

                <div style={{ fontSize: '17px', marginBottom: '20px' }}>Client Information</div>

                <div style={{ marginBottom: '10px' }}>Client Name</div>
                <Input />

                <div style={{ margin: '20px 0 10px 0' }}>Client Email</div>
                <Input />

                <div style={{ margin: '20px 0 10px 0' }}>Client Phone</div>
                <Input />

                <div style={{ fontSize: '17px', marginBottom: '20px', marginTop: '40px' }}>
                    Salesperson
                </div>

                <div style={{ marginBottom: '10px' }}>Salesperson Name</div>
                <Input />

                <div style={{ margin: '20px 0 10px 0' }}>Salesperson Email</div>
                <Input />

                <div style={{ margin: '20px 0 10px 0' }}>Salesperson Phone</div>
                <Input />

                <div style={{ fontSize: '17px', marginBottom: '20px', marginTop: '40px' }}>
                    Project Information
                </div>

                <div style={{ marginBottom: '10px' }}>Project Location</div>
                <Input />

                <div style={{ margin: '20px 0 10px 0' }}>Project Name</div>
                <Input />

                <div style={{ margin: '20px 0 10px 0' }}>ADU Model Type</div>
                <Input />

                <div
                    style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}
                >
                    <div style={{ fontSize: '20px' }}>Total Price for ADU</div>
                    <Input placeholder="$150,000" style={{ width: '200px' }} />
                </div>

                <div
                    style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}
                >
                    <div style={{ fontSize: '20px' }}>Discount</div>
                    <Input placeholder="$150,000" style={{ width: '200px' }} />
                </div>

                <div
                    style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}
                >
                    <div style={{ fontSize: '20px' }}>Price After Discount</div>
                    <Input placeholder="$150,000" style={{ width: '200px' }} />
                </div>
            </div>
        </div>
    );
}

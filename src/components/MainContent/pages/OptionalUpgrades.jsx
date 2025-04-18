import { Checkbox, Input, Radio } from 'antd';
export function OptionalUpgrades() {
    const L1BottomMargin = '30px';
    const L2BottomMargin = '20px';
    const L3BottomMargin = '10px';
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '100px',
            }}
        >
            <div style={{ width: '500px' }}>
                <div style={{ fontSize: '30px', margin: '0px 0 30px 0' }}>Optional Upgrades</div>
                <div style={{ fontSize: '17px', marginBottom: L1BottomMargin }}>
                    Optional Upgrades
                </div>

                <div style={{ marginBottom: L2BottomMargin, fontWeight: 'bold' }}>Site</div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: L1BottomMargin,
                    }}
                >
                    <Checkbox>Landscape</Checkbox>
                    <Checkbox>Fence</Checkbox>
                    <Checkbox>New Driveway</Checkbox>
                </div>

                <div style={{ marginBottom: L2BottomMargin, fontWeight: 'bold' }}>MEP</div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ width: '50%' }}>
                        <div style={{ marginBottom: L3BottomMargin }}>
                            <Checkbox>Separate Water Meter</Checkbox>
                        </div>
                        <Checkbox>Solar System</Checkbox>
                    </div>
                    <div style={{ width: '50%' }}>
                        <div style={{ marginBottom: L3BottomMargin }}>
                            <Checkbox>Separate Electric Meter</Checkbox>
                        </div>
                        <Checkbox>Air Conditioner</Checkbox>
                    </div>
                </div>

                <div
                    style={{
                        marginBottom: L2BottomMargin,
                        marginTop: L1BottomMargin,
                        fontWeight: 'bold',
                    }}
                >
                    Building
                </div>
                {/* --------------------------------------------- */}
                <div style={{ fontSize: '14px', marginBottom: L3BottomMargin }}>Exterior Door</div>

                <Radio.Group
                    defaultValue="Fiber-glass exterior door"
                    style={{ display: 'flex', width: '100%' }}
                >
                    <Radio
                        value="Fiber-glass exterior door"
                        style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    >
                        Fiber-glass exterior door
                    </Radio>
                    <Radio
                        value="Solid wood exterior door"
                        style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    >
                        Solid wood exterior door
                    </Radio>
                </Radio.Group>

                {/* --------------------------------------------- */}
                <div
                    style={{
                        fontSize: '14px',
                        marginBottom: L3BottomMargin,
                        marginTop: L2BottomMargin,
                    }}
                >
                    Window
                </div>

                <Radio.Group
                    defaultValue="Vinyl-framed windows, black"
                    style={{ display: 'flex', width: '100%' }}
                >
                    <Radio
                        value="Vinyl-framed windows, black"
                        style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    >
                        Vinyl-framed windows, black
                    </Radio>
                    <Radio
                        value="Aluminum window, black / white"
                        style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    >
                        Aluminum window, black / white
                    </Radio>
                </Radio.Group>
                {/* --------------------------------------------- */}
                <div
                    style={{
                        fontSize: '14px',
                        marginBottom: L3BottomMargin,
                        marginTop: L2BottomMargin,
                    }}
                >
                    Flooring
                </div>

                <Radio.Group defaultValue="undefined" style={{ display: 'flex', width: '100%' }}>
                    <Radio
                        value="Engineered weed flooring"
                        style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    >
                        Engineered weed flooring
                    </Radio>
                </Radio.Group>
                {/* --------------------------------------------- */}

                <div
                    style={{
                        marginBottom: L2BottomMargin,
                        marginTop: L1BottomMargin,
                        fontWeight: 'bold',
                    }}
                >
                    Kitchen
                </div>
                {/* --------------------------------------------- */}
                <div style={{ fontSize: '14px', marginBottom: L3BottomMargin }}>Countertops</div>

                <Radio.Group defaultValue="undefined" style={{ display: 'flex', width: '100%' }}>
                    <Radio
                        value="Porcelain Slab Countertops"
                        style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    >
                        Porcelain Slab Countertops
                    </Radio>
                </Radio.Group>

                {/* --------------------------------------------- */}
                <div
                    style={{
                        fontSize: '14px',
                        marginBottom: L3BottomMargin,
                        marginTop: L2BottomMargin,
                    }}
                >
                    Cabinet
                </div>

                <Radio.Group defaultValue="undefined" style={{ display: 'flex', width: '100%' }}>
                    <Radio
                        value="European Shaker-style Cabinet"
                        style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    >
                        European Shaker-style Cabinet
                    </Radio>
                </Radio.Group>

                {/* --------------------------------------------- */}
                <div
                    style={{
                        fontSize: '14px',
                        marginBottom: L3BottomMargin,
                        marginTop: L2BottomMargin,
                    }}
                >
                    Light Fixtures
                </div>

                <Radio.Group defaultValue="undefined" style={{ display: 'flex', width: '100%' }}>
                    <Radio
                        value="Modern Pendant Light"
                        style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    >
                        Modern Pendant Light
                    </Radio>
                </Radio.Group>

                {/* --------------------------------------------- */}
                <div
                    style={{
                        fontSize: '14px',
                        marginBottom: L3BottomMargin,
                        marginTop: L2BottomMargin,
                    }}
                >
                    Equipments
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ width: '50%' }}>
                        <Checkbox>Refrigerator</Checkbox>
                    </div>
                    <div style={{ width: '50%' }}>
                        <Checkbox>Dishwasher</Checkbox>
                    </div>
                </div>

                {/* --------------------------------------------- */}
                <div
                    style={{
                        marginBottom: L2BottomMargin,
                        marginTop: L1BottomMargin,
                        fontWeight: 'bold',
                    }}
                >
                    Bathroom
                </div>
                {/* --------------------------------------------- */}
                <div style={{ fontSize: '14px', marginBottom: L3BottomMargin }}>Equipments</div>

                <div style={{ width: '50%' }}>
                    <Checkbox>Smart Toilet</Checkbox>
                </div>
                {/* --------------------------------------------- */}
                <div
                    style={{
                        fontSize: '14px',
                        marginBottom: L3BottomMargin,
                        marginTop: L2BottomMargin,
                    }}
                >
                    Vanity
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ width: '50%' }}>
                        <Checkbox>LED Bathroom Mirror</Checkbox>
                    </div>
                    <div style={{ width: '50%' }}>
                        <Checkbox>European Shaker-style Cabinet</Checkbox>
                    </div>
                </div>
                {/* --------------------------------------------- */}
                <div
                    style={{
                        fontSize: '14px',
                        marginBottom: L3BottomMargin,
                        marginTop: L2BottomMargin,
                    }}
                >
                    Bathroom System
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ width: '50%' }}>
                        <Checkbox>Shower Wall Tiles with a Niche</Checkbox>
                    </div>
                    <div style={{ width: '50%' }}>
                        <Checkbox>Tempered Glass Shower Door</Checkbox>
                    </div>
                </div>

                <div
                    style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}
                >
                    <div style={{ fontSize: '20px' }}>Optional Upgrades Total Cost</div>
                    <div style={{ width: '150px' }}>
                        <Input placeholder={'$20,000'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Checkbox, Input, Radio } from 'antd';
import { useGlobalMap } from '../../../hooks/GlobalMap';

const L1BottomMargin = '30px';
const L2BottomMargin = '20px';
const L3BottomMargin = '10px';

function Site(props) {
    const { site, basePath } = props;
    const { pushGlobalContractMapValue, removeGlobalContractMapItem } = useGlobalMap();

    function Item(props) {
        const { text } = props;
        return (
            <Checkbox
                checked={site?.includes?.(text)}
                onClick={(e) => {
                    if (e.target.checked) {
                        pushGlobalContractMapValue(basePath, text);
                    } else {
                        removeGlobalContractMapItem(basePath, text);
                    }
                }}
            >
                {text}
            </Checkbox>
        );
    }

    return (
        <>
            <div style={{ marginBottom: L2BottomMargin, fontWeight: 'bold' }}>Site</div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: L1BottomMargin,
                }}
            >
                <Item text={'Landscape'} />
                <Item text={'Fence'} />
                <Item text={'New Driveway'} />
            </div>
        </>
    );
}

function MEP(props) {
    const { MEP, basePath } = props;
    const { pushGlobalContractMapValue, removeGlobalContractMapItem } = useGlobalMap();

    function Item(props) {
        const { text } = props;
        return (
            <Checkbox
                checked={MEP?.includes?.(text)}
                onClick={(e) => {
                    if (e.target.checked) {
                        pushGlobalContractMapValue(basePath, text);
                    } else {
                        removeGlobalContractMapItem(basePath, text);
                    }
                }}
            >
                {text}
            </Checkbox>
        );
    }
    return (
        <>
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
                        <Item text={'Separate Water Meter'} />
                    </div>
                    <Item text={'Solar System'} />
                </div>
                <div style={{ width: '50%' }}>
                    <div style={{ marginBottom: L3BottomMargin }}>
                        <Item text={'Separate Electric Meter'} />
                    </div>
                    <Item text={'Air Conditioner'} />
                </div>
            </div>
        </>
    );
}

function Building(props) {
    const { building, basePath } = props;
    const { setGlobalContractMapValue } = useGlobalMap();

    function Item(props) {
        const { curPath, text } = props;
        return (
            <Radio
                onClick={(e) => {
                    if (e.target.checked) {
                        setGlobalContractMapValue([...basePath, curPath], text);
                    }
                }}
                value={text}
                style={{ textAlign: 'center', margin: 0 }}
            >
                {text}
            </Radio>
        );
    }

    function ExteriorDoor(props) {
        const { curPath } = props;
        return (
            <>
                <div style={{ fontSize: '14px', marginBottom: L3BottomMargin }}>Exterior Door</div>
                <Radio.Group defaultValue={building[curPath]} style={{ display: 'flex' }}>
                    <div
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
                    >
                        <Item curPath={curPath} text={'Fiber-glass exterior door'} />
                        <Item curPath={curPath} text={'Solid wood exterior door'} />
                        <Item curPath={curPath} text={'None'} />
                    </div>
                </Radio.Group>
            </>
        );
    }

    function Window(props) {
        const { curPath } = props;
        return (
            <>
                <div
                    style={{
                        fontSize: '14px',
                        marginBottom: L3BottomMargin,
                        marginTop: L2BottomMargin,
                    }}
                >
                    Window
                </div>
                <Radio.Group defaultValue={building[curPath]} style={{ display: 'flex' }}>
                    <div
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
                    >
                        <Item curPath={curPath} text={'Vinyl-framed windows, black'} />
                        <Radio
                            value="Aluminum window, black / white"
                            style={{ textAlign: 'center', margin: 0, fontSize: '13px' }}
                            onClick={(e) => {
                                if (e.target.checked) {
                                    setGlobalContractMapValue(
                                        [...basePath, curPath],
                                        'Aluminum window, black / white'
                                    );
                                }
                            }}
                        >
                            Aluminum window, black / white
                        </Radio>
                        <Item curPath={curPath} text={'None'} />
                    </div>
                </Radio.Group>
            </>
        );
    }

    return (
        <>
            <div
                style={{
                    marginBottom: L2BottomMargin,
                    marginTop: L1BottomMargin,
                    fontWeight: 'bold',
                }}
            >
                Building
            </div>

            <ExteriorDoor curPath={'exteriorDoor'} />

            <Window curPath={'window'} />

            <div
                style={{
                    fontSize: '14px',
                    marginBottom: L3BottomMargin,
                    marginTop: L2BottomMargin,
                }}
            >
                Flooring
            </div>

            <Radio.Group
                defaultValue={building['flooring']}
                style={{ display: 'flex', width: '100%' }}
            >
                <Radio
                    value="Engineered weed flooring"
                    style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    onClick={(e) => {
                        if (e.target.checked) {
                            setGlobalContractMapValue(
                                [...basePath, 'flooring'],
                                'Engineered weed flooring'
                            );
                        }
                    }}
                >
                    Engineered weed flooring
                </Radio>
                <Radio
                    value="None"
                    style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    onClick={(e) => {
                        if (e.target.checked) {
                            setGlobalContractMapValue([...basePath, 'flooring'], 'None');
                        }
                    }}
                >
                    None
                </Radio>
            </Radio.Group>
        </>
    );
}

function Kitchen(props) {
    const { kitchen, basePath } = props;
    const { setGlobalContractMapValue, pushGlobalContractMapValue, removeGlobalContractMapItem } =
        useGlobalMap();

    return (
        <>
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

            <Radio.Group
                defaultValue={kitchen.countertops}
                style={{ display: 'flex', width: '100%' }}
            >
                <Radio
                    value="Porcelain Slab Countertops"
                    style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    onClick={(e) => {
                        if (e.target.checked) {
                            setGlobalContractMapValue(
                                [...basePath, 'countertops'],
                                'Porcelain Slab Countertops'
                            );
                        }
                    }}
                >
                    Porcelain Slab Countertops
                </Radio>
                <Radio
                    value="None"
                    style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    onClick={(e) => {
                        if (e.target.checked) {
                            setGlobalContractMapValue([...basePath, 'countertops'], 'None');
                        }
                    }}
                >
                    None
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

            <Radio.Group defaultValue={kitchen.cabinet} style={{ display: 'flex', width: '100%' }}>
                <Radio
                    value="European Shaker-style Cabinet"
                    style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    onClick={(e) => {
                        if (e.target.checked) {
                            setGlobalContractMapValue(
                                [...basePath, 'cabinet'],
                                'European Shaker-style Cabinet'
                            );
                        }
                    }}
                >
                    European Shaker-style Cabinet
                </Radio>
                <Radio
                    value="None"
                    style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    onClick={(e) => {
                        if (e.target.checked) {
                            setGlobalContractMapValue([...basePath, 'cabinet'], 'None');
                        }
                    }}
                >
                    None
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

            <Radio.Group
                defaultValue={kitchen.lightFixtures}
                style={{ display: 'flex', width: '100%' }}
            >
                <Radio
                    value="Modern Pendant Light"
                    style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    onClick={(e) => {
                        if (e.target.checked) {
                            setGlobalContractMapValue(
                                [...basePath, 'lightFixtures'],
                                'Modern Pendant Light'
                            );
                        }
                    }}
                >
                    Modern Pendant Light
                </Radio>
                <Radio
                    value="None"
                    style={{ flex: 1, textAlign: 'center', margin: 0 }}
                    onClick={(e) => {
                        if (e.target.checked) {
                            setGlobalContractMapValue([...basePath, 'lightFixtures'], 'None');
                        }
                    }}
                >
                    None
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
                    <Checkbox
                        checked={kitchen?.equipments?.includes?.('Refrigerator')}
                        onChange={(e) => {
                            if (e.target.checked) {
                                pushGlobalContractMapValue(
                                    [...basePath, 'equipments'],
                                    'Refrigerator'
                                );
                            } else {
                                removeGlobalContractMapItem(
                                    [...basePath, 'equipments'],
                                    'Refrigerator'
                                );
                            }
                        }}
                    >
                        Refrigerator
                    </Checkbox>
                </div>
                <div style={{ width: '50%' }}>
                    <Checkbox
                        checked={kitchen?.equipments?.includes?.('Dishwasher')}
                        onChange={(e) => {
                            if (e.target.checked) {
                                pushGlobalContractMapValue(
                                    [...basePath, 'equipments'],
                                    'Dishwasher'
                                );
                            } else {
                                removeGlobalContractMapItem(
                                    [...basePath, 'equipments'],
                                    'Dishwasher'
                                );
                            }
                        }}
                    >
                        Dishwasher
                    </Checkbox>
                </div>
            </div>
        </>
    );
}

function Bathroom(props) {
    const { bathroom, basePath } = props;
    const { pushGlobalContractMapValue, removeGlobalContractMapItem } = useGlobalMap();

    console.log(JSON.stringify(bathroom, null, 2));
    return (
        <>
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
                <Checkbox
                    checked={bathroom?.equipments?.includes?.('Smart Toilet')}
                    onChange={(e) => {
                        if (e.target.checked) {
                            pushGlobalContractMapValue([...basePath, 'equipments'], 'Smart Toilet');
                        } else {
                            removeGlobalContractMapItem(
                                [...basePath, 'equipments'],
                                'Smart Toilet'
                            );
                        }
                    }}
                >
                    Smart Toilet
                </Checkbox>
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
                    <Checkbox
                        checked={bathroom?.vanity?.includes?.('LED Bathroom Mirror')}
                        onChange={(e) => {
                            if (e.target.checked) {
                                pushGlobalContractMapValue(
                                    [...basePath, 'vanity'],
                                    'LED Bathroom Mirror'
                                );
                            } else {
                                removeGlobalContractMapItem(
                                    [...basePath, 'vanity'],
                                    'LED Bathroom Mirror'
                                );
                            }
                        }}
                    >
                        LED Bathroom Mirror
                    </Checkbox>
                </div>
                <div style={{ width: '50%' }}>
                    <Checkbox
                        checked={bathroom?.vanity?.includes?.('European Shaker-style Cabinet')}
                        onChange={(e) => {
                            if (e.target.checked) {
                                pushGlobalContractMapValue(
                                    [...basePath, 'vanity'],
                                    'European Shaker-style Cabinet'
                                );
                            } else {
                                removeGlobalContractMapItem(
                                    [...basePath, 'vanity'],
                                    'European Shaker-style Cabinet'
                                );
                            }
                        }}
                    >
                        European Shaker-style Cabinet
                    </Checkbox>
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
                    <Checkbox
                        checked={bathroom?.bathroomSystem?.includes?.(
                            'Shower Wall Tiles with a Niche'
                        )}
                        onChange={(e) => {
                            if (e.target.checked) {
                                pushGlobalContractMapValue(
                                    [...basePath, 'bathroomSystem'],
                                    'Shower Wall Tiles with a Niche'
                                );
                            } else {
                                removeGlobalContractMapItem(
                                    [...basePath, 'bathroomSystem'],
                                    'Shower Wall Tiles with a Niche'
                                );
                            }
                        }}
                    >
                        Shower Wall Tiles with a Niche
                    </Checkbox>
                </div>
                <div style={{ width: '50%' }}>
                    <Checkbox
                        checked={bathroom?.bathroomSystem?.includes?.('Tempered Glass Shower Door')}
                        onChange={(e) => {
                            if (e.target.checked) {
                                pushGlobalContractMapValue(
                                    [...basePath, 'bathroomSystem'],
                                    'Tempered Glass Shower Door'
                                );
                            } else {
                                removeGlobalContractMapItem(
                                    [...basePath, 'bathroomSystem'],
                                    'Tempered Glass Shower Door'
                                );
                            }
                        }}
                    >
                        Tempered Glass Shower Door
                    </Checkbox>
                </div>
            </div>
        </>
    );
}

export function OptionalUpgrades() {
    const { globalContractMap, setGlobalContractMapValue } = useGlobalMap();
    const optionalUpgrades = globalContractMap.optionalUpgrades;
    const contractMapBasePath = ['optionalUpgrades'];

    // console.log(JSON.stringify(optionalUpgrades, null, 2));

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

                <Site site={optionalUpgrades.site} basePath={[...contractMapBasePath, 'site']} />

                <MEP MEP={optionalUpgrades.MEP} basePath={[...contractMapBasePath, 'MEP']} />

                <Building
                    building={optionalUpgrades.building}
                    basePath={[...contractMapBasePath, 'building']}
                />

                <Kitchen
                    kitchen={optionalUpgrades.kitchen}
                    basePath={[...contractMapBasePath, 'kitchen']}
                />

                <Bathroom
                    bathroom={optionalUpgrades.bathroom}
                    basePath={[...contractMapBasePath, 'bathroom']}
                />

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

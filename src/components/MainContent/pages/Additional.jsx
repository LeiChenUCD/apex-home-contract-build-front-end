import { Checkbox, Input, Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {
    sanitizeNumberInput,
    parseNumber,
    formatNumberWithCommas,
    formatUSD,
} from '../../../utils/numberUtils';
import { useGlobalMap } from '../../../hooks/GlobalMap';

const sectionWidth = 500;
const subSectionLeftMargin = 20;

function OptionalServiceItem(props) {
    const { text, value, changeValue } = props;

    return (
        <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div
                style={{
                    display: 'flex',
                    width: `${sectionWidth - subSectionLeftMargin}px`,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div style={{ fontSize: '14px' }}>{text}</div>

                <div style={{ display: 'flex' }}>
                    <Checkbox style={{ alignItems: 'center', marginRight: '20px' }}>
                        Included
                    </Checkbox>
                    <div style={{ width: '130px' }}>
                        <Input
                            value={value ? formatUSD(value) : null}
                            onInput={(e) => {
                                const cleaned = sanitizeNumberInput(e.target.value);
                                changeValue(cleaned);
                            }}
                            placeholder="$1,000 - 2,000"
                        />
                    </div>
                </div>
            </div>

            <div style={{ marginLeft: '20px', alignContent: 'center' }}>
                <Tooltip
                    title={
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Important</div>
                            <div>
                                There are a lot of things you can do in space, and space essentially
                                is unlimited resources.
                            </div>
                        </div>
                    }
                    placement="right"
                    color="#ffffff"
                    styles={{
                        body: {
                            color: '#000',
                        },
                    }}
                >
                    <ExclamationCircleOutlined
                        style={{
                            transform: 'rotate(180deg)',
                            color: 'gray',
                            cursor: 'pointer',
                        }}
                    />
                </Tooltip>
            </div>
        </div>
    );
}

function SectionTitle(props) {
    const { text } = props;
    return (
        <div
            style={{
                fontSize: '24px',
                marginBottom: '15px',
                marginTop: '20px',
                fontWeight: 'bold',
            }}
        >
            {text}
        </div>
    );
}

function SubSectionTitle(props) {
    const { text } = props;
    return <div style={{ marginBottom: '10px' }}>{text}</div>;
}

export function Additional() {
    const { globalContractMap, setGlobalContractMapValue } = useGlobalMap();

    console.log(JSON.stringify(globalContractMap, null, 2));

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '100px',
            }}
        >
            <div style={{ width: `${sectionWidth}px` }}>
                <div style={{ fontSize: '30px', margin: '0px 0 30px 0' }}>
                    Additional Cost & Services
                </div>

                <SectionTitle text={'site'} />

                <SubSectionTitle text={'Tree Removal'} />

                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: `${subSectionLeftMargin}px`,
                            width: `${sectionWidth + subSectionLeftMargin}px`,
                        }}
                    >
                        <OptionalServiceItem
                            value={
                                globalContractMap.additionalCostAndServices.site.treeRemoval
                                    .arboristReport.price
                            }
                            changeValue={(value) =>
                                setGlobalContractMapValue(
                                    [
                                        'additionalCostAndServices',
                                        'site',
                                        'treeRemoval',
                                        'arboristReport',
                                        'price',
                                    ],
                                    value
                                )
                            }
                            text={'Arborist Report'}
                        />
                        <OptionalServiceItem text={'Tree Removal Plan Check'} />
                        <OptionalServiceItem text={'Tree Removal Permit'} />
                        <OptionalServiceItem text={'Physical Tree Removal'} />
                    </div>
                </div>

                <SubSectionTitle text={'Demolition'} />

                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: `${subSectionLeftMargin}px`,
                            width: `${sectionWidth + subSectionLeftMargin}px`,
                        }}
                    >
                        <OptionalServiceItem text={'Demo Permit'} />
                        <OptionalServiceItem text={'Demolition work'} />
                    </div>
                </div>

                <SubSectionTitle text={'Survey'} />
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: `${subSectionLeftMargin}px`,
                            width: `${sectionWidth + subSectionLeftMargin}px`,
                        }}
                    >
                        <OptionalServiceItem text={'Land survey (recommend)'} />
                    </div>
                </div>

                <SectionTitle text={'Structure'} />
                <SubSectionTitle text={'Building safety (recommend)'} />
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: `${subSectionLeftMargin}px`,
                            width: `${sectionWidth + subSectionLeftMargin}px`,
                        }}
                    >
                        <OptionalServiceItem text={'Soil Report'} />
                        <OptionalServiceItem text={'Structural design'} />
                        <OptionalServiceItem text={'Foundation upgrade work'} />
                    </div>
                </div>

                <SectionTitle text={'MEP'} />
                <SubSectionTitle text={'Fire Sprinkler'} />
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: `${subSectionLeftMargin}px`,
                            width: `${sectionWidth + subSectionLeftMargin}px`,
                        }}
                    >
                        <OptionalServiceItem text={'Fire permit'} />
                        <OptionalServiceItem text={'Fire sprinkler design'} />
                        <OptionalServiceItem text={'Fire sprinkler construction'} />
                    </div>
                </div>

                <SubSectionTitle text={'Electrical Panel Upgrade'} />
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: `${subSectionLeftMargin}px`,
                            width: `${sectionWidth + subSectionLeftMargin}px`,
                        }}
                    >
                        <OptionalServiceItem text={'Upgrade permit'} />
                        <OptionalServiceItem text={'Panel upgrade work'} />
                    </div>
                </div>

                <SubSectionTitle text={'Utility'} />
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: `${subSectionLeftMargin}px`,
                            width: `${sectionWidth + subSectionLeftMargin}px`,
                        }}
                    >
                        <OptionalServiceItem text={'Sewer line'} />
                    </div>
                </div>

                <SectionTitle text={'Others'} />
                <SubSectionTitle text={'Impact fee'} />
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: `${subSectionLeftMargin}px`,
                            width: `${sectionWidth + subSectionLeftMargin}px`,
                        }}
                    >
                        <OptionalServiceItem text={'School fee'} />
                        <OptionalServiceItem text={'Parkland fee'} />
                    </div>
                </div>

                <div
                    style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}
                >
                    <div style={{ fontSize: '20px' }}>Additional Cost & Services Total</div>
                    <div style={{ width: '150px' }}>
                        <Input placeholder={'$30,000'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

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
    const { setGlobalContractMapValue } = useGlobalMap();
    const { text, subMap, basePath } = props;

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
                    <Checkbox
                        onChange={(e) =>
                            setGlobalContractMapValue([...basePath, 'included'], e.target.checked)
                        }
                        style={{ alignItems: 'center', marginRight: '20px' }}
                    >
                        Included
                    </Checkbox>
                    <div style={{ width: '130px' }}>
                        <Input
                            value={subMap?.price ? formatUSD(subMap.price) : null}
                            onInput={(e) => {
                                const cleaned = sanitizeNumberInput(e.target.value);
                                setGlobalContractMapValue([...basePath, 'price'], cleaned);
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

// ------------------Site-----------------

function TreeRemoval(props) {
    const { treeRemoval, basePath } = props;
    return (
        <>
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
                        subMap={treeRemoval.arboristReport}
                        basePath={[...basePath, 'arboristReport']}
                        text={'Arborist Report'}
                    />
                    <OptionalServiceItem
                        subMap={treeRemoval.treeRemovalPlanCheck}
                        basePath={[...basePath, 'treeRemovalPlanCheck']}
                        text={'Tree Removal Plan Check'}
                    />
                    <OptionalServiceItem
                        subMap={treeRemoval.treeRemovalPermit}
                        basePath={[...basePath, 'treeRemovalPermit']}
                        text={'Tree Removal Permit'}
                    />
                    <OptionalServiceItem
                        subMap={treeRemoval.physicalTreeRemoval}
                        basePath={[...basePath, 'physicalTreeRemoval']}
                        text={'Physical Tree Removal'}
                    />
                </div>
            </div>
        </>
    );
}

function Demolition(props) {
    const { demolition, basePath } = props;
    return (
        <>
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
                    <OptionalServiceItem
                        subMap={demolition.demoPermit}
                        basePath={[...basePath, 'demoPermit']}
                        text={'Demo Permit'}
                    />
                    <OptionalServiceItem
                        subMap={demolition.demolitionWork}
                        basePath={[...basePath, 'demolitionWork']}
                        text={'Demolition work'}
                    />
                </div>
            </div>
        </>
    );
}

function Survey(props) {
    const { survey, basePath } = props;
    return (
        <>
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
                    <OptionalServiceItem
                        subMap={survey.landSurvey}
                        basePath={[...basePath, 'landSurvey']}
                        text={'Land survey (recommend)'}
                    />
                </div>
            </div>
        </>
    );
}

function Site(props) {
    const { site, basePath } = props;
    return (
        <>
            <SectionTitle text={'site'} />

            <TreeRemoval treeRemoval={site.treeRemoval} basePath={[...basePath, 'treeRemoval']} />

            <Demolition demolition={site.demolition} basePath={[...basePath, 'demolition']} />

            <Survey survey={site.survey} basePath={[...basePath, 'survey']} />
        </>
    );
}

// ------------------Structure-----------------

function BuildingSafety(props) {
    const { buildingSafety, basePath } = props;
    return (
        <>
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
                    <OptionalServiceItem
                        subMap={buildingSafety.soilReport}
                        basePath={[...basePath, 'soilReport']}
                        text={'Soil Report'}
                    />
                    <OptionalServiceItem
                        subMap={buildingSafety.structuralDesign}
                        basePath={[...basePath, 'structuralDesign']}
                        text={'Structural design'}
                    />
                    <OptionalServiceItem
                        subMap={buildingSafety.foundationUpgradeWork}
                        basePath={[...basePath, 'foundationUpgradeWork']}
                        text={'Foundation upgrade work'}
                    />
                </div>
            </div>
        </>
    );
}

function Structure(props) {
    const { structure, basePath } = props;
    return (
        <>
            <SectionTitle text={'Structure'} />
            <BuildingSafety
                buildingSafety={structure.buildingSafety}
                basePath={[...basePath, 'buildingSafety']}
            />
        </>
    );
}

// ------------------MEP-----------------

function FireSprinkler(props) {
    const { fireSprinkler, basePath } = props;
    return (
        <>
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
                    <OptionalServiceItem
                        subMap={fireSprinkler.firePermit}
                        basePath={[...basePath, 'firePermit']}
                        text={'Fire permit'}
                    />
                    <OptionalServiceItem
                        subMap={fireSprinkler.fireSprinklerDesign}
                        basePath={[...basePath, 'fireSprinklerDesign']}
                        text={'Fire sprinkler design'}
                    />
                    <OptionalServiceItem
                        subMap={fireSprinkler.fireSprinklerConstruction}
                        basePath={[...basePath, 'fireSprinklerConstruction']}
                        text={'Fire sprinkler construction'}
                    />
                </div>
            </div>
        </>
    );
}

function ElectricalPanelUpgrade(props) {
    const { electricalPanelUpgrade, basePath } = props;
    return (
        <>
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
                    <OptionalServiceItem
                        subMap={electricalPanelUpgrade.upgradePermit}
                        basePath={[...basePath, 'upgradePermit']}
                        text={'Upgrade permit'}
                    />
                    <OptionalServiceItem
                        subMap={electricalPanelUpgrade.panelUpgradeWork}
                        basePath={[...basePath, 'panelUpgradeWork']}
                        text={'Panel upgrade work'}
                    />
                </div>
            </div>
        </>
    );
}

function Utility(props) {
    const { utility, basePath } = props;
    return (
        <>
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
                    <OptionalServiceItem
                        subMap={utility.sewerLine}
                        basePath={[...basePath, 'sewerLine']}
                        text={'Sewer line'}
                    />
                </div>
            </div>
        </>
    );
}

function MEP(props) {
    const { MEP, basePath } = props;
    return (
        <>
            <SectionTitle text={'MEP'} />
            <FireSprinkler
                fireSprinkler={MEP.fireSprinkler}
                basePath={[...basePath, 'fireSprinkler']}
            />

            <ElectricalPanelUpgrade
                electricalPanelUpgrade={MEP.electricalPanelUpgrade}
                basePath={[...basePath, 'electricalPanelUpgrade']}
            />

            <Utility utility={MEP.utility} basePath={[...basePath, 'utility']} />
        </>
    );
}

// ------------------Others-----------------

function ImpactFee(props) {
    const { impactFee, basePath } = props;
    return (
        <>
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
                    <OptionalServiceItem
                        subMap={impactFee.schoolFee}
                        basePath={[...basePath, 'schoolFee']}
                        text={'School fee'}
                    />
                    <OptionalServiceItem
                        subMap={impactFee.parklandFee}
                        basePath={[...basePath, 'parklandFee']}
                        text={'Parkland fee'}
                    />
                </div>
            </div>
        </>
    );
}

function Others(props) {
    const { others, basePath } = props;
    return (
        <>
            <SectionTitle text={'Others'} />
            <ImpactFee impactFee={others.impactFee} basePath={[...basePath, 'impactFee']} />
        </>
    );
}

export function Additional() {
    const { globalContractMap, setGlobalContractMapValue } = useGlobalMap();

    const additional = globalContractMap.additionalCostAndServices;
    const contractMapBasePath = ['additionalCostAndServices'];

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // marginBottom: '100px',
            }}
        >
            <div style={{ width: `${sectionWidth}px` }}>
                <div style={{ fontSize: '30px', margin: '0px 0 30px 0' }}>
                    Additional Cost & Services
                </div>

                <Site site={additional.site} basePath={[...contractMapBasePath, 'site']} />

                <Structure
                    structure={additional.structure}
                    basePath={[...contractMapBasePath, 'structure']}
                />

                <MEP MEP={additional.MEP} basePath={[...contractMapBasePath, 'MEP']} />

                <Others others={additional.others} basePath={[...contractMapBasePath, 'others']} />

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

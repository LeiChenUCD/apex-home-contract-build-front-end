import { Input, Select } from 'antd';
import { useGlobalMap } from '../../../hooks/GlobalMap';
import { useIsPhoneSize } from '../../../hooks/useIsPhoneSize';

function ClientInformation(props) {
    const { setGlobalContractMapValue } = useGlobalMap();
    const { clientInformation, basePath } = props;
    // console.log(clientInformation);
    return (
        <>
            <div style={{ fontSize: '17px', marginBottom: '20px' }}>Client Information</div>

            <div style={{ marginBottom: '10px' }}>Client Name</div>
            <Input
                onChange={(e) =>
                    setGlobalContractMapValue([...basePath, 'clientName'], e.target.value)
                }
            />

            <div style={{ margin: '20px 0 10px 0' }}>Client Email</div>
            <Input
                onChange={(e) =>
                    setGlobalContractMapValue([...basePath, 'clientEmail'], e.target.value)
                }
            />

            <div style={{ margin: '20px 0 10px 0' }}>Client Phone</div>
            <Input
                onChange={(e) =>
                    setGlobalContractMapValue([...basePath, 'clientPhone'], e.target.value)
                }
            />
        </>
    );
}

function Salesperson(props) {
    const { setGlobalContractMapValue } = useGlobalMap();
    const { salesperson, basePath } = props;
    // console.log(salesperson);
    return (
        <>
            <div style={{ fontSize: '17px', marginBottom: '20px', marginTop: '40px' }}>
                Salesperson
            </div>
            <div style={{ marginBottom: '10px' }}>Salesperson Name</div>
            <Input
                onChange={(e) =>
                    setGlobalContractMapValue([...basePath, 'salespersonName'], e.target.value)
                }
            />

            <div style={{ margin: '20px 0 10px 0' }}>Salesperson Email</div>
            <Input
                onChange={(e) =>
                    setGlobalContractMapValue([...basePath, 'salespersonEmail'], e.target.value)
                }
            />

            <div style={{ margin: '20px 0 10px 0' }}>Salesperson Phone</div>
            <Input
                onChange={(e) =>
                    setGlobalContractMapValue([...basePath, 'salespersonPhone'], e.target.value)
                }
            />
        </>
    );
}

function ProjectInformation(props) {
    const isPhone = useIsPhoneSize();
    const { setGlobalContractMapValue } = useGlobalMap();
    const { projectInformation, basePath } = props;
    return (
        <>
            <div style={{ fontSize: '17px', marginBottom: '20px', marginTop: '40px' }}>
                Project Information
            </div>

            <div style={{ marginBottom: '10px' }}>Project Location</div>
            <Input
                onChange={(e) =>
                    setGlobalContractMapValue([...basePath, 'projectLocation'], e.target.value)
                }
            />

            <div style={{ margin: '20px 0 10px 0' }}>Project Name</div>
            <Input
                onChange={(e) =>
                    setGlobalContractMapValue([...basePath, 'projectName'], e.target.value)
                }
            />

            <div style={{ margin: '20px 0 10px 0' }}>ADU Model Type</div>
            <Select
                defaultValue="a"
                style={{ width: !isPhone ? 500 : window.innerWidth - 20 }}
                onChange={(e) => setGlobalContractMapValue([...basePath, 'ADUModelType'], e)}
                options={[
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' },
                    { value: 'c', label: 'C' },
                ]}
            />
        </>
    );
}

export function StandardContent() {
    const isPhone = useIsPhoneSize();
    const { globalContractMap, setGlobalContractMapValue } = useGlobalMap();
    // console.log(globalContractMap.standardContent);
    const standardContent = globalContractMap.standardContent;
    const contractMapBasePath = ['standardContent'];
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // marginBottom: '100px',
            }}
        >
            <div style={{ width: !isPhone ? '500px' : window.innerWidth - 20 }}>
                <div style={{ fontSize: '30px', margin: '0px 0 30px 0' }}>Standard Content</div>

                <ClientInformation
                    clientInformation={standardContent.clientInformation}
                    basePath={[...contractMapBasePath, 'clientInformation']}
                />
                <Salesperson
                    salesperson={standardContent.salesperson}
                    basePath={[...contractMapBasePath, 'salesperson']}
                />
                <ProjectInformation
                    projectInformation={standardContent.projectInformation}
                    basePath={[...contractMapBasePath, 'projectInformation']}
                />

                <div
                    style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
                >
                    <div style={{ fontSize: '20px' }}>Total Price for ADU</div>
                    <Input placeholder="$150,000" style={{ width: '200px' }} />
                </div>
            </div>
        </div>
    );
}

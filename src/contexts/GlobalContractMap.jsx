export const initContractMap = {
    main: {
        contactNumber: '',
        effectiveDate: null,
    },
    standardContent: {
        clientInformation: {
            clientName: '',
            clientEmail: '',
            clientPhone: '',
        },
        salesperson: {
            salespersonName: '',
            salespersonEmail: '',
            salespersonPhone: '',
        },
        projectInformation: {
            projectLocation: '',
            projectName: '',
            ADUModelType: '',
        },
    },
    additionalCostAndServices: {
        site: {
            treeRemoval: {
                arboristReport: {
                    included: false,
                    price: 0,
                },
                treeRemovalPlanCheck: {
                    included: false,
                    price: 0,
                },
                treeRemovalPermit: {
                    included: false,
                    price: 0,
                },
                physicalTreeRemoval: {
                    included: false,
                    price: 0,
                },
            },
            demolition: {
                demoPermit: {
                    included: false,
                    price: 0,
                },
                demolitionWork: {
                    included: false,
                    price: 0,
                },
            },
            survey: {
                landSurvey: {
                    included: false,
                    price: 0,
                },
            },
        },
        structure: {
            buildingSafety: {
                soilReport: {
                    included: false,
                    price: 0,
                },
                structuralDesign: {
                    included: false,
                    price: 0,
                },
                foundationUpgradeWork: {
                    included: false,
                    price: 0,
                },
            },
        },
        MEP: {
            fireSprinkler: {
                firePermit: {
                    included: false,
                    price: 0,
                },
                fireSprinklerDesign: {
                    included: false,
                    price: 0,
                },
                fireSprinklerConstruction: {
                    included: false,
                    price: 0,
                },
            },
            electricalPanelUpgrade: {
                upgradePermit: {
                    included: false,
                    price: 0,
                },
                panelUpgradeWork: {
                    included: false,
                    price: 0,
                },
            },
            utility: {
                sewerLine: {
                    included: false,
                    price: 0,
                },
            },
        },
        others: {
            impactFee: {
                schoolFee: {
                    included: false,
                    price: 0,
                },
                parklandFee: {
                    included: false,
                    price: 0,
                },
            },
        },
    },
    optionalUpgrades: {
        site: [],
        MEP: [],
        building: {
            exteriorDoor: 'None',
            window: 'None',
            flooring: 'None',
        },
        kitchen: {
            countertops: 'None',
            cabinet: 'None',
            lightFixtures: 'None',
            Equipments: [],
        },
        bathroom: {
            equipments: [],
            vanity: [],
            bathroomSystem: [],
        },
    },
};

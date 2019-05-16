const initalState = {
    installation: {
        target: null,
        type: {
            resident: {
                target: null,
                name: "resident",
                description: "Si votre client souhaite une borne à domicile.",
                application: [{
                    id: 0,
                    name: "private",
                    description: "Si votre client ne souhaite pas facturer l'utilisation des bornes.",
                }, {
                    id: 1,
                    name: "societe",
                    description: "Si votre client souhaite facturer sa consommation à son employeur. Un abonnement chez un provider est requis dans ce cas.",
                }]
            },
            enterprise: {
                target: null,
                name: "enterprise",
                description: "Si la borne doit être installée sur un parking d'une société ou chez un indépendant",
                application: [{
                    id: 0,
                    name: "privateParking",
                }, {
                    id: 1,
                    name: "semiPrivateParking",
                    description: "Si le parking est également accessible aux autres e-conducteurs.",
                }]
            },
            horeca: {
                target: null,
                name: "horeca",
                description: "Si votre client est un hôtel ou un restaurant.",
                application: [{
                    id: 0,
                    name: "privateClientParking",
                    description: "Si votre client ne souhaite pas facturer l'utilisation des bornes.",
                }, {
                    id: 1,
                    name: "privateSemiPublicParking",
                    description: "Si le parking donne également accès aux autres e-conducteurs qui ne sont pas clients de l'entreprise.",
                }]
            }
        }
    },
    bornes: {
        simple: {
            target: null,
            name: "Simple",
            id: "simple",
            description: "Emplacement pour une seule voiture",
        },
        double: {
            target: null,
            name: "Double",
            id: "double",
            description: "Préférez une borne double pour deux emplacements de parking contigus. Le prix sera moindre et l'installation plus simple.",
        }
    },
    cars: {
        carSelect: null,
        modelCar: null,
    }
}

export default function contextConfig(state = initalState, action) {
    switch (action.type) {
        case 'EDIT_INSTALLATION_TARGET':
            return {
                ...state,
                installation: {
                    ...state.installation,
                    target: action.payload
                }
            }
        case 'EDIT_APPLICATION_TARGET':
            return {
                ...state,
                installation: {
                    ...state.installation,
                    type: {
                        ...state.installation.type,
                        [action.payload.typeName]: {
                            ...state.installation.type[action.payload.typeName],
                            target: action.payload.applicationId
                        }
                    }
                }
            }
        case 'EDIT_BORNE_SIMPLE':
            return {
                ...state,
                bornes: {
                    ...state.bornes,
                    simple: {
                        ...state.bornes.simple,
                        target: action.payload
                    }
                }
            }
        case 'EDIT_BORNE_DOUBLE':
            return {
                ...state,
                bornes: {
                    ...state.bornes,
                    double: {
                        ...state.bornes.double,
                        target: action.payload
                    }
                }
            }
        case 'SELECT_CAR':
            return {
                ...state,
                cars: {
                    ...state.cars,
                    carSelect: action.payload
                }
            }
        case 'SELECT_MODEL':
            return {
                ...state,
                cars: {
                    ...state.cars,
                    modelCar: action.payload
                }
            }
        case 'RESTORE':
            return {
                ...initalState
            }
        default:
            return state
    }
}
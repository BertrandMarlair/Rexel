import { whiteColor } from "style/constant";

const ContextStyle = {
    main: {
        padding: '0 4vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        margin: '20px 0px',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        margin: '0 10px',
    },
    numberTarget: {
        width: '100%',
        backgroundColor: 'unset',
    },
    stepper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    borne: {
        width: 30,
        height: 80,
    },
    icon: {
        color: whiteColor,
    },
    cars: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    carsSelect: {
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
    },
    carsSelectAll: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
    },
    car: {
        background: whiteColor,
        width: 70,
        minWidth: 70,
        height: 70,
        margin: 10,
        padding: 10,
        borderRadius: 4,
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    carImage: {
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    },
    carSelect: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: "20px 0",
        '@media (max-width: 1280px)': {
            flexDirection: 'column',
        },
    },
    select: {
        width: '50%',
        '@media (max-width: 1280px)': {
            width: '100%',
        },
    },
    model: {
        width: '50%',
        '@media (max-width: 1280px)': {
            width: '100%',
        },
    },
    settings: {
        display: 'flex',
    },
    settingsModel: {
        width: 150,
    },
    carSelectInfos: {
        padding: '0px 20px',
        '@media (max-width: 1280px)': {
            padding: '20px 0px ',
        },
    },
    navigationBottom: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}

export default ContextStyle;
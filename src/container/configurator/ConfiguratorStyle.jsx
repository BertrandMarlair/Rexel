import { transition, whiteColor} from 'style/constant'

const page =  {
    width: '50vw',
    height: '100vh',
    position: 'absolute',
    transition: transition.transition,
    background: whiteColor,
    boxSizing: 'border-box',
}

const ConfiguratorStyle = {
    displayLeft : {
        ...page,
        transform: 'translateX(0)',
        zIndex: 2, 
    },
    displayRigth : {
        ...page,
        transform: 'translateX(50vw)',
        zIndex: 2, 
    },
    mask : {
        ...page,
        transform: 'translateX(-50vw)',
        animationDuration: '10s',
        animationName: 'displayOut',
        zIndex: 2, 
    },
    prepared : {
        ...page,
        transform: 'translateX(200vw)',
        animationDuration: '10s',
        animationName: 'displayOut',
        zIndex: 0
    },
    scene: {
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        minHeight: 'calc(100vh - 90px)',
    },
    blueLeft: {
        height: '100%',
        background: '#78CAF0',
        padding: 20,
        boxSizing: 'border-box',
        boxShadow: 'inset 80px 0px 100px 0px #71bde0',
    },
    blueRight: {
        height: '100%',
        background: '#78CAF0',
        padding: 20,
        boxSizing: 'border-box',
        boxShadow: 'inset -80px 0px 100px 0px #71bde0',
    },
    whiteLeft: {
        height: '100%',
        background: 'white',
        padding: 20,
        boxSizing: 'border-box',
    },
    whiteRight: {
        height: '100%',
        background: 'white',
        padding: 20,
        boxSizing: 'border-box',
    }
}

export default ConfiguratorStyle;
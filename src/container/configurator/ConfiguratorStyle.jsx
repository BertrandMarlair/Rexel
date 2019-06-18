import { transition, whiteColor } from '../../style/constant'

const page =  {
    width: '50vw',
    height: '100%',
    position: 'absolute',
    transition: transition.transition,
    background: whiteColor,
    boxSizing: 'border-box',
    '@media (max-width: 960px)': {
        width: '100vw',
        position: 'relative',
        transform: 'translateX(0)',
    },
}

const side = {
    overflow: 'scroll',
    height: '100%',
    padding: 20,
    boxSizing: 'border-box',
    overflowX: 'hidden',
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
        zIndex: 0,
    },
    scene: {
        overflow: 'hidden',
        position: 'relative',
        minHeight: 'calc(100vh - 90px)',
    },
    blueLeft: {
        ...side,
        boxShadow: 'inset 80px 0px 100px 0px #71bde0',
        background: '#78CAF0',
    },
    blueRight: {
        ...side,
        boxShadow: 'inset -80px 0px 100px 0px #71bde0',
        background: '#78CAF0',
    },
    blueSide: {
        padding: 20,
        boxShadow: 'inset -80px 0px 100px 0px #71bde0',
        background: '#78CAF0',
        minHeight: 'calc(100vh - 90px)',
    },
    whiteLeft: {
        ...side,
        background: 'white',
    },
    whiteRight: {
        ...side,
        background: 'white',
    },
    whiteSide: {
        padding: 20,
        background: 'white',
        minHeight: 'calc(100vh - 90px)',
    }
}

export default ConfiguratorStyle
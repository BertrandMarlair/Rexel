const ElectricNetwork = {
    wrapper: {
        padding: '0 4vw',
    },
    typeButton: {
        margin: '20px 0px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    button: {
        width: '50%',
        padding: '5px 10px',
        '@media (max-width: 1350px)': {
            width: '100%',
        },
    },
    type: {
        color: '#727171',
        textAlign: 'center',
        fontWeight: 500,
        margin: 'auto',
        fontSize: 30,
        textTransform: 'uppercase',
    },
    container: {
        display: 'flex',
        marginBottom: 20,
        '@media (max-width: 960px)': {
            flexDirection: 'column',
        },
    },
    item: {
        width: '50%',
        padding: 15,
        '@media (max-width: 960px)': {
            width: '100%',
        },
    },
    goodToKnow: {
        background: '#73c0e4',
        margin: '30px -20px',
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
    },
    goodToKnowTitle: {
        marginRight: 10,
        minWidth: 150,
    },
    calcul: {
        backgroundColor: '#4DB6E7',
        padding: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center',
        color: 'white',
        marginTop: 5,
        borderRadius: 2
    },
    navigationBottom: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}

export default ElectricNetwork
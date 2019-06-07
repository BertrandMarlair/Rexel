import { greenColor } from "style/constant";

const BornesStyle = {
    iconTop: {
        margin: 'auto',
        textAlign: 'center',
        marginTop: '8vh',
    },
    icon: {
        color: greenColor,
        fontSize: '5rem',
    },
    title: {
        color: '#fff',
        fontSize: 48,
        textAlign: 'center',
        lineHeight: '92.6%',
        fontWeight: 600,
        textTransform: 'uppercase',
        maxWidth: 550,
        margin: '30px auto',
        '@media (max-width: 500px)': {
            fontSize: 35,
        },
    },
    description: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: '92.6%',
        fontWeight: 500,
        maxWidth: 340,
        margin: 'auto',
    },
    type: {
        color: '#727171',
        textAlign: 'center',
        fontWeight: 500,
        margin: 'auto',
        fontSize: 30,
        lineHeight: '92.6%',
        marginTop: '10vh',
    },
    iconLink: {
        textAlign: 'center',
        marginTop: '5vw',
    },
    iconLast: {
        fontSize: '3rem',
        color: 'grey',
    }
}

export default BornesStyle;
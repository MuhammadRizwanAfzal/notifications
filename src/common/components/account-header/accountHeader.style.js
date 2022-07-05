import { makeStyles } from '@material-ui/styles';

const AccountStyles = makeStyles((theme) => ({
    container: {
        margin: '0 20px',
    },
    overlayLabel: {
        color: theme.palette.common.white,
    },
    header: {
        position: 'fixed',
        left: 0,
        top: 0,
        background: theme.palette.background.white,
        boxShadow: 'none',
        width: '50%',
        borderBottom: theme.border.light,
        display: 'flex',
        zIndex: 1100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logoCnt: {
        width: 169,
        '& img': {
            width: '100%',
        },
    },

    mainBox: {
        background: 'url(/images/account/signin-overlay-bg.jpg) no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        top: 80,
        width: '100%',
        height: '100%',
        overflow: 'scroll',
        transition: 'transform 0.6s ease-in-out',
        zIndex: 100,
        '& .signUpBox': {
            padding: '40px 22px',
            opacity: 0.9,
            [theme.breakpoints.down('xs')]: {
                padding: '40px 15px',
            },
        },
},
}));

export default AccountStyles;

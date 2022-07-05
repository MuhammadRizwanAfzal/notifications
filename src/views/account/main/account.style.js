import { makeStyles } from '@material-ui/styles';

const AccountStyles = makeStyles((theme) => ({
    container: {
        margin: '0 20px',
    },
    overlayLabel: {
        color: theme.palette.common.black,
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

    imageLabel: {
        position: 'absolute',
        // top: '50%',
        zIndex: 100,
        background: 'rgb(255 255 255 / 70%)',
        padding: 25,
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
        // [theme.breakpoints.down('sm')]: {
        //     overflow: 'hidden',
        // },
        '& .signUpBox': {
            padding: '40px 22px',
            opacity: 0.9,
            [theme.breakpoints.down('xs')]: {
                padding: '40px 15px',
            },
        },
},
signupAsCnt: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& h4': {
        color: theme.palette.typography.black,
        marginRight: 10,
    },
},
groupedBtn: {
    padding: '10px 25px',
    textTransform: 'none',
  },
  toggleButtonRoot: {
    background: theme.palette.background.blue,
    color: theme.palette.typography.white,
      '&:hover': {
        background: theme.palette.background.blue,
      },
  },
  toggleButtonRootSelected: {
    background: `${theme.palette.background.blue} !important`,
    color: `${theme.palette.typography.white} !important`,
  },
}));

export default AccountStyles;

import { makeStyles } from '@material-ui/styles';

const SignUpStyles = makeStyles((theme) => ({

   signUpCnt: {
    marginTop: 130,
    [theme.breakpoints.down('sm')]: {
        marginTop: 0,
        padding: '50px 15px',
        display: 'flex',
        opacity: 1,
        background: theme.palette.background.white,
        flexDirection: 'column',
    },
   },
   signUpInnerCnt: {
    [theme.breakpoints.up('xl')]: {
        width: '70%',
        margin: '0 auto',
    },
    [theme.breakpoints.up('md')]: {

        overflowY: 'auto',
    },
   },
   dialogCnt: {
    maxWidth: '70%',
    [theme.breakpoints.down('md')]: {
        maxWidth: '90%',
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        margin: 10,
    },
},
termsConditionsCnt: {
    '& p': {
        paddingLeft: 10,
    },
},
   label: {
    color: theme.palette.typography.darkOrange,
   },
   fieldsCnt: {
    margin: 'auto 25px',
    [theme.breakpoints.down('xs')]: {
        margin: 'auto 5px',
    },
    marginTop: 30,
   },
   inputAdornedStartItem: {
    paddingLeft: 10,
    },
    submitBtn: {
        width: 250,
        [theme.breakpoints.down('sm')]: {
            width: '49%',
        },
    },
    // signUpInnerCnt: {
    //     width: '80%',
    //     margin: '0 auto',
    //     [theme.breakpoints.down('lg')]: {
    //         width: '85%',
    //     },
    //     [theme.breakpoints.down('md')]: {
    //         width: '90%',
    //     },
    //     [theme.breakpoints.down('xs')]: {
    //         width: '100%',
    //         padding: 10,
    //     },
    // },

    wizardBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
         background: theme.palette.common.white,
         border: theme.border.light,
         borderRadius: 30,
         padding: '2px 0px',
         width: 135,
         margin: '0 auto',
         marginBottom: 25,
         [theme.breakpoints.up('md')]: {
            marginTop: 100,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 15,
            marginBottom: 2,
            width: '100%',
            borderRadius: 0,
            padding: 5,
        },
    },
    wizardBoxIcon: {
        color: theme.palette.icon.mediumGray,
        width: 30,
        height: 30,
        // cursor: 'pointer',
        '-webkit-tap-highlight-color': 'rgba(255, 255, 255, 0)',
    },
    marRight: {
        marginRight: 20,
    },
    selectedIcon: {
        background: theme.palette.background.blueMedium,
        borderRadius: '50%',
        color: theme.palette.common.white,
    },
    hide: {
        display: 'none',
    },
}));

export default SignUpStyles;

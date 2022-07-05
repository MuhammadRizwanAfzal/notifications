import { makeStyles } from '@material-ui/styles';

const SignUpStyles = makeStyles((theme) => ({

    signUpCnt: {
        height: '100%',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            paddingTop: 30,
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
        },
        '& .cnt': {
            width: '70%',
            margin: '0 auto',
            [theme.breakpoints.down('lg')]: {
                width: '85%',
            },
            [theme.breakpoints.down('md')]: {
                width: '90%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        '& .formBox': {
            opacity: 1,
            padding: '20px 22px',
            background: theme.palette.background.white,
            display: 'flex',
            // padding: '20px 30px',
            [theme.breakpoints.down('xs')]: {
                padding: '50px 15px',
            },
            flexDirection: 'column',
            '& .label': {
                fontStyle: 'italic',
                color: theme.palette.secondary.main,
                fontSize: 20,
            },
            '& .titleSection': {
                marginBottom: 30,
                [theme.breakpoints.down('xs')]: {
                    marginBottom: 10,
                },
            },
            '& .inputAdornedStartItem': {
                paddingLeft: 10,
            },
            '& .mainHeading': {
                [theme.breakpoints.down('xs')]: {
                    fontWeight: 600,
                    fontSize: 24,
                },

            },
            '& .subHeading': {
                [theme.breakpoints.down('xs')]: {
                    fontSize: 20,
                },
            },
            '& .signUpBtnCnt': {
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 10,
            },
            '& .customBtn': {
                [theme.breakpoints.up('md')]: {
                    padding: '4px 40px',
                    fontSize: 18,
                    marginBottom: 10,
                },
            },
        },
    },
    signUpInnerCnt: {
        width: '80%',
        margin: '0 auto',
        [theme.breakpoints.down('lg')]: {
            width: '85%',
        },
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            padding: 10,
        },
    },

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
            marginTop: 140,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 25,
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

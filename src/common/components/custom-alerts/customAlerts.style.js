import { makeStyles } from '@material-ui/styles';

const dialogStyles = makeStyles((theme) => ({
    alertCnt: {
        fontSize: 15,
        display: 'flex',
        padding: 5,
        textAlign: 'center',
        marginBottom: 15,
        background: theme.palette.background.lightGray,
        height: 50,
        alignItems: 'center',
        fontWeight: 600,

        '& svg': {
            marginRight: 10,
            fontSize: 28,
            fontWeight: 'bold',
        },
    },
    success_alert: {
        color: theme.palette.typography.mediumGreen,
        borderLeft: `1px solid ${theme.palette.typography.mediumGreen}`,
    },
    failure_alert: {
        color: theme.palette.secondary.main,
        borderLeft: `1px solid ${theme.palette.secondary.main}`,
    },
    info_alert: {
        color: theme.palette.secondary.medium,
        borderLeft: `1px solid ${theme.palette.secondary.medium}`,
    },
    warning_alert: {
        color: theme.palette.typography.darkOrange,
        borderLeft: `1px solid ${theme.palette.typography.darkOrange}`,
    },
}));

export default dialogStyles;

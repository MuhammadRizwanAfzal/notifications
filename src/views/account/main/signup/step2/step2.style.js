import { makeStyles } from '@material-ui/styles';

const Step2Styles = makeStyles((theme) => ({
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
}));

export default Step2Styles;

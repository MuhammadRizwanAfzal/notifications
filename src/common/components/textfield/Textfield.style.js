import { makeStyles } from '@material-ui/styles';

const textFieldStyles = makeStyles((theme) => ({
    inputFormControl: {
        marginBottom: 20,
    },
    outlinedInputroot: {
            background: theme.palette.background.white,
    },
    notchedOutline: {
        border: theme.border.light
    },
    errorLabel: {
        fontSize: 14,
        display: 'flex',
        marginLeft: 0,
    },
}));

export default textFieldStyles;

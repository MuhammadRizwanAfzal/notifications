import { makeStyles } from '@material-ui/styles';

const CustomDialogStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
      },
      title: {
        marginLeft: theme.spacing(10),
        flex: 1,
      },
      box: {
      zIndex: 1300,
      '& .MuiDialog-container': {
        bottom: 0,
        position: 'fixed',
        height: '40%',
        width: '100%',
      },
      },
}));

export default CustomDialogStyles;

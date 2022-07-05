import { makeStyles } from '@material-ui/styles';

const switchStyles = makeStyles((theme) => ({
  switchBase: {
    '&$checked': {
      color: theme.palette.background.blueMedium,
      '& + $track': {
        backgroundColor: theme.palette.background.blueMedium,
      },
    },
  },
  label: {
    marginLeft: 5,
  },
  checked: {},
  track: {},
}));

export default switchStyles;

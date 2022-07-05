import { makeStyles } from '@material-ui/styles';

const checkboxStyles = makeStyles((theme) => ({
  favouriteIcon: {
    fontSize: 22,
    color: theme.palette.icon.redDark,
  },
  peopleFavText: {
    color: theme.palette.typography.redDark,
    fontSize: 16,
  },
  favouriteIconLarge: {
    fontSize: 38,
  },
  tooltipText: {
    color: theme.palette.typography.gray300,
  },
  loginLink: {
    color: theme.palette.typography.blue,
    textDecoration: 'underline',
    fontWeight: 700,
    cursor: 'pointer',
  },
  favBtnContent: {
    padding: 15,
  },
}));

export default checkboxStyles;

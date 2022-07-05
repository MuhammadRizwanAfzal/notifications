import { makeStyles } from "@material-ui/styles";

const Styles = makeStyles((theme) => ({
  errorLabel: {
    marginTop: 5,
    fontSize: 14,
    display: "flex",
    marginLeft: 0,
    color: theme.palette.typography.red,
  },

  phoneCnt: {
    "& .special-label": {
      display: "none !important",
    },
  },

  phoneTxt: {
    "& .special-label": {
      left: "10px !important",
      top: "-9px !important",
      fontSize: 11,
      fontWeight: 400,
      fontFamily: "Open Sans, sans-serif !important",
    },
  },

  inputField: {
    width: "100% !important",
    border: "1px solid #e6e6e6 !important",
    height: "40px !important",
    "&::placeholder": {
      fontWeight: 100,
      color: theme.palette.typography.lightGray2,
    },
  },

  inputError: {
    border: "1px solid red !important",
  },

  button: {
    background: `${theme.palette.background.white} !important`,
    border: "1px solid #e6e6e6 !important",
  },

  buttonError: {
    border: "1px solid red !important",
  },
}));

export default Styles;

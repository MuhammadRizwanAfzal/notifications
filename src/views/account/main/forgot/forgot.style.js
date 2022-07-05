import { makeStyles } from "@material-ui/styles";

const ForgotStyles = makeStyles((theme) => ({
  forgotCnt: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      paddingTop: 38,
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      height: "100%",
      textAlign: "center",
      padding: 10,
      paddingTop: 38,
    },
  },
  forgotInnerCnt: {
    opacity: 1,
    background: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: 15,
    },
  },
  mainHeading: {
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
  },

  subHeading: {
    color: theme.palette.typography.darkOrange,
    fontSize: 18,
    marginBottom: 10,
  },
  inputAdornedStartItem: {
    paddingLeft: 10,
  },
}));

export default ForgotStyles;

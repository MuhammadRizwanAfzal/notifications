import { makeStyles } from "@material-ui/styles";

const loginStyles = makeStyles((theme) => ({
  loginCnt: {
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
  loginInnerCnt: {
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
      padding: "15px 10px",
    },
  },
  mainHeading: {
    marginBottom: 0,
    fontSize: 44,
    fontFamily: "'Open Sans'",
    fontWeight: 600,
    color: theme.palette.typography.blue,
  },
  headingTagLine: {
    marginBottom: 30,
    fontSize: 20,
    color: theme.palette.typography.lightGray2,
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  signInBtnCnt: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  inputAdornedStartItem: {
    paddingLeft: 10,
  },
  loginBtn: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
    },
  },
  lock: {
    fontSize: 45,
    color: theme.palette.icon.darkGray,
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
    },
  },
  loginAsCnt: {
    textAlign: "center",
    marginBottom: 40,
  },
  groupedBtn: {
    padding: "4px 12.5px",
    textTransform: "none",
  },
  toggleButtonRootSelected: {
    background: `${theme.palette.background.blue} !important`,
    color: `${theme.palette.typography.white} !important`,
  },
}));

export default loginStyles;

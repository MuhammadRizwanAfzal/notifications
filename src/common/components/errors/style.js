import { makeStyles } from "@material-ui/styles";

const ErrorPageStyels = makeStyles((theme) => ({
  gridContainer: {
    height: "100vh",
  },
  pageNotFound: {
    textAlign: "center",
    minWidth: 600,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("xs")]: {
      minWidth: 320,
      background: theme.palette.background.lightGray1,
      padding: 20,
    },
    [theme.breakpoints.down("sm")]: {
      background: theme.palette.background.lightGray1,
      padding: 20,
    },
    [theme.breakpoints.only("md")]: {
      minWidth: 450,
    },
  },

  leftGrid: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  logoCnt: {
    padding: "25px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${theme.palette.background.lightGray1}`,
  },
  heading: {
    fontSize: 150,
    color: theme.palette.typography.darkOrange,
    [theme.breakpoints.down("xs")]: {
      fontSize: 100,
    },
  },

  errorMsg: {
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
    // [theme.breakpoints.down("lg")]: {
    //   fontSize: 14,
    // },
  },
  errorImg: {
    width: "100%",
    // height: "100%",
  },
  rightGrid: {
    overflow: "hidden",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      overflow: "unset",
    },
  },
}));

export default ErrorPageStyels;

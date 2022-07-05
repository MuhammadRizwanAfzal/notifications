import { makeStyles } from "@material-ui/styles";

const resetStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 60,
    color: theme.palette.icon.darkOrange,
  },
  notFoundCnt: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "url(/images/light-bg.png)",
    backgroundSize: "auto",
    height: "calc(100% - 77px)",
    position: "absolute",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  notFoundInnerCnt: {
    opacity: 1,
    background: theme.palette.common.white,
    display: "flex",
    border: theme.border.light,
    borderRadius: 8,
    padding: 50,
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: 15,
      border: "none",
      background: "none",
      boxShadow: "none",
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

export default resetStyles;

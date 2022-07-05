import { makeStyles } from "@material-ui/styles";

const customButtonStyles = makeStyles((theme) => ({
  // Outlined Success button Root Styles
  outlinedsuccess: {
    border: theme.border.blue,
    "&:hover": {
      background: theme.palette.background.blue,
      "& span": {
        color: theme.palette.typography.white,
      },
    },
  },
  // Outlined orange button Root Styles
  outlinedorange: {
    border: theme.border.orangeBorder,
    "&:hover": {
      background: theme.palette.background.orange,
      "& span": {
        color: theme.palette.typography.white,
      },
    },
  },
  containedorange: {
    background: theme.palette.background.orange,
    boxShadow: "none",
    "&:hover": {
      background: theme.palette.background.orange,
      boxShadow: "none",
      opacity: 0.8,
    },
  },
  // Contained button Root Styles
  containedsuccess: {
    background: theme.palette.background.blue,
    boxShadow: "none",
    "&:hover": {
      // background: theme.palette.background.blueLight,
      background: theme.palette.background.blue,
      boxShadow: "none",
      opacity: 0.8,
    },
  },
  // Contained button failure Root Styles
  containedfailure: {
    background: theme.palette.background.red,
    boxShadow: "none",
    "&:hover": {
      // background: theme.palette.background.blueLight,
      background: theme.palette.background.red,
      boxShadow: "none",
    },
  },
  // Contained button failure Root Styles
  containedgray: {
    background: theme.palette.background.lightGray1,
    boxShadow: "none",
    "&:hover": {
      // background: theme.palette.background.blueLight,
      background: theme.palette.background.lightGray1,
      boxShadow: "none",
    },
  },
  // Text button Root Styles
  textsuccess: {
    color: theme.palette.typography.blue,
    "&:hover": {
      background: "none",
    },
  },
  // Text button Root Styles
  textorange: {
    color: theme.palette.typography.darkOrange,
    "&:hover": {
      background: "none",
    },
  },
  // Text button Root Styles
  textgrayLight: {
    color: theme.palette.typography.darkGray,
    "&:hover": {
      background: "none",
    },
  },
  // Outlined Success button Label Styles
  outlinedsuccessLabel: {
    color: theme.palette.typography.blue,
    textTransform: "initial",
  },
  // Outlined orange button Label Styles
  outlinedorangeLabel: {
    color: theme.palette.typography.darkOrange,
    textTransform: "initial",
    "&:hover": {
      color: theme.palette.typography.white,
    },
  },
  containedorangeLabel: {
    textTransform: "initial",
    color: theme.palette.typography.white,
  },
  // Contained button Label Styles
  containedsuccessLabel: {
    textTransform: "initial",
    color: theme.palette.typography.white,
  },
  // Contained failure button Label Styles
  containedfailureLabel: {
    textTransform: "initial",
    color: theme.palette.typography.white,
  },
  // Contained Gray button Label Styles
  containedgrayLabel: {
    textTransform: "initial",
    color: theme.palette.typography.darkGray,
  },

  // Text button Label Styles
  textsuccessLabel: {
    textTransform: "initial",
  },
  // Text button Label Styles
  textorangeLabel: {
    textTransform: "initial",
  },
  // Text button Label Styles
  textgrayLightLabel: {
    textTransform: "initial",
  },
  // Text button Label Styles
  textgrayLightLabelleft: {
    textTransform: "initial",
  },
  // Outlined Success button Label Styles
  outlinedsuccessLabelleft: {
    color: theme.palette.typography.blue,
    textTransform: "initial",
    justifyContent: "space-between",
  },
  // Contained button Label Styles
  containedsuccessLabelleft: {
    textTransform: "initial",
    color: theme.palette.typography.white,
    justifyContent: "space-between",
  },
  // Text button Label Styles
  textsuccessLabelleft: {
    textTransform: "initial",
    justifyContent: "space-between",
  },
}));

export default customButtonStyles;

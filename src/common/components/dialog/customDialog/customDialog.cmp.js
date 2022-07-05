import React from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import dialogStyles from "./customDialog.style";
import CustomButton from "../../button/Button";

function CustomDialog(props) {
  const {
    // eslint-disable-next-line react/prop-types
    children,
    onClose,
    open,
    title,
    headerProps,
    dialogProps,
    actionCntProps,
    hideActionCnt,
    successBtnClick,
    btnLabel,
    disabled,
    isLoading,
    disableHeader,
    iconProps,
    titleProps,
  } = props;
  const classes = dialogStyles();

  return (
    <Dialog onClose={onClose} open={open} {...dialogProps}>
      {!disableHeader && (
        <MuiDialogTitle
          disableTypography
          className={classes.root}
          {...titleProps}
        >
          <Typography variant="h3" style={{ marginBottom: 0 }}>
            {title}
          </Typography>

          <IconButton
            onClick={onClose}
            className={classes.closeButton}
            {...iconProps}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
      )}

      <MuiDialogContent dividers {...headerProps}>
        {children}
      </MuiDialogContent>

      {hideActionCnt ? null : (
        <MuiDialogActions {...actionCntProps}>
          <CustomButton
            variant="contained"
            buttonType="success"
            onClick={successBtnClick}
            disabled={disabled}
            isLoading={isLoading}
          >
            {!isLoading && (btnLabel || "Save Changes")}
          </CustomButton>
        </MuiDialogActions>
      )}
    </Dialog>
  );
}
CustomDialog.defaultProps = {
  children: "",
  onClose: () => {},
  open: false,
  title: "",
  disableHeader: false,
  disableFooter: false,
  headerProps: {},
  titleProps: {},
  dialogProps: {},
  actionCntProps: {},
  hideActionCnt: false,
  btnLabel: "",
  disabled: false,
  isLoading: false,
  iconProps: {},
};

export default CustomDialog;

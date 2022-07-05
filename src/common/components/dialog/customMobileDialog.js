import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CustomButton from '../button/Button';
import CustomDialogStyles from './styles';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

type CustomDialogProps = {
  title: string,
  elements: any,
  open: boolean,
  handleClose: Function,
  isSubmit: Boolean,
  buttonTitle: string,
  dialogProps?: any,
  onClick?: Function,
};

export default function CustomMobileDialog(props: CustomDialogProps) {
  const classes = CustomDialogStyles();
  const {
    title, elements, open, handleClose, isSubmit, buttonTitle, dialogProps, onClick,
  } = props;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      {...dialogProps}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <List>
        {elements}
      </List>
      { isSubmit
      ? (
        <CustomButton
          variant="contained"
          buttonType="success"
          style={{
            margin: '10px auto',
            width: '40%',
          }}
          onClick={onClick}
        >
          {buttonTitle}
        </CustomButton>
) : <div />}
    </Dialog>
  );
}

CustomMobileDialog.defaultProps = {
  dialogProps: {},
  onClick: () => {},
};

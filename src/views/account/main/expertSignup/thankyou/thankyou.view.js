// @flow
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import EmailSentIcon from '../../../../../common/icons/emailSent.icon';
import ThankyouStyles from './thankyou.style';

const Thankyou = () => {
  const theme = useTheme();
  const classes = ThankyouStyles();
  return (
    <section className={classes.messageCnt}>
      <div>
        <EmailSentIcon
          viewBox="0 0 512 512"
          color={theme.palette.typography.darkGray}
          style={{ fontSize: 120, marginBottom: 20, width: '100%' }}
        />
        <Typography variant="h2" style={{ color: theme.palette.typography.mediumGreen }}>
          Success!
        </Typography>
        <Typography variant="h3">
          Thanks for signing up. Please confirm your email.
        </Typography>
      </div>
    </section>
    );
};

export default Thankyou;

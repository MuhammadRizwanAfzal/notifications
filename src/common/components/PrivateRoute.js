import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { isLoggedIn } from '../../views/auth/auth.utils';

const PrivateRoute = ({
  component: Component,
  location,
  ...rest
}) => {
  useEffect(() => {
    if (!isLoggedIn() && location.pathname !== '/auth/login') {
      // navigate('/auth/login');
      return null;
    }
    return null;
  }, []);

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
};

export default PrivateRoute;

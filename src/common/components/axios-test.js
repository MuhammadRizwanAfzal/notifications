import React from 'react';
import PropTypes from 'prop-types';

const AxiosTest = (props) => {
  const { data } = props;
  return (
    <div>
      <div>SSR - Data Fetching</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

AxiosTest.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AxiosTest;

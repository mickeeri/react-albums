import React, {PropTypes} from 'react';
import { connect } from 'react-redux'

const Loader = ({isFetching}) => {
  return (
    <div className="Loader">
      ...Fetching data from server
    </div>
  );
};

Loader.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

export default connect(({isFetching}) => ({ isFetching }))(Loader);
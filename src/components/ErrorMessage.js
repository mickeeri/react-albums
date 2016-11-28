// @flow

import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import type { State } from '../reducers/index'

const ErrorMessage = ({errorMessage}) => {
  if (!errorMessage) {
    return null
  }

  return (
    <div className="ErrorMessage">
      <h4>Ett fel inträffade</h4>
      {errorMessage}asdsadas
    </div>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

const mapStateToProps = ({errorMessage}: State) => ({
  errorMessage,
})

export default connect(mapStateToProps)(ErrorMessage);
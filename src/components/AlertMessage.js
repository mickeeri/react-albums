// @flow

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import type { State } from '../reducers/index'
import { resetSuccessMessage } from '../actions/index'
import FontAwesome from 'react-fontawesome'


class AlertMessage extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.successMessage) {
      setTimeout(function() {
        nextProps.resetSuccessMessage()
      }, 1200);
    }
  }
  
  render() {
    const {successMessage, errorMessage} = this.props

    if (!successMessage && !errorMessage) {
      return null
    }
    
    return (
      <div className={`AlertMessage ${successMessage ? 'success' : 'error'}`}>
        <FontAwesome name="exclamation-triangle" />
        {successMessage ? successMessage : errorMessage}
      </div>
    )
  }
}

AlertMessage.propTypes = {
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
};

const mapStateToProps = ({successMessage, errorMessage}: State) => ({
  successMessage,
  errorMessage,
})

export default connect(mapStateToProps, {resetSuccessMessage})(AlertMessage);
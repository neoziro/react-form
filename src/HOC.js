import React from 'react'
import createReactClass from 'create-react-class'
import Formsy from './formsy-react'

module.exports = function hoc(Component) {
  return createReactClass({
    mixins: [Formsy.Mixin],
    render() {
      return React.createElement(Component, {
        setValidations: this.setValidations,
        setValue: this.setValue,
        resetValue: this.resetValue,
        getValue: this.getValue,
        hasValue: this.hasValue,
        getErrorMessage: this.getErrorMessage,
        getErrorMessages: this.getErrorMessages,
        isFormDisabled: this.isFormDisabled,
        isValid: this.isValid,
        isPristine: this.isPristine,
        isFormSubmitted: this.isFormSubmitted,
        isRequired: this.isRequired,
        showRequired: this.showRequired,
        showError: this.showError,
        isValidValue: this.isValidValue,
        ...this.props,
        ...this.state,
      })
    },
  })
}

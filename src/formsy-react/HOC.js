/* eslint-disable */
import React from 'react'
import createReactClass from 'create-react-class'
import Mixin from './Mixin'

module.exports = function(Component) {
  return createReactClass({
    displayName: 'Formsy(' + getDisplayName(Component) + ')',
    mixins: [Mixin],
    render: function() {
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
      })
    },
  })
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' ? Component : 'Component')
}
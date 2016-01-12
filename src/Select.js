import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import ControlWrapper from './ControlWrapper';
import ControlMixin from './ControlMixin';
import Formsy from 'formsy-react';

export default React.createClass({
  displayName: 'Select',

  propTypes: {
    onChange: PropTypes.func,
    options: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]),
    placeholder: PropTypes.string
  },

  mixins: [Formsy.Mixin, ControlMixin, PureRenderMixin],

  getDefaultProps() {
    return {options: []};
  },

  /**
   * Render placeholder.
   *
   * @returns {ReactElement}
   */

  renderPlaceHolder() {
    const {placeholder} = this.props;

    if (!placeholder)
      return null;

    return <option value="">{placeholder}</option>;
  },

  /**
   * Render options.
   *
   * @returns {ReactElement[]}
   */

  renderOptions() {
    return this.getOptions().map(this.renderOption);
  },

  /**
   * Render option.
   *
   * @returns {ReactElement}
   */

  renderOption(entry, index) {
    const props = {
      key: index,
      value: entry.value,
      ref: index
    };
    return <option {...props}>{entry.label}</option>;
  },

  /**
   * Called when the value changes.
   *
   * @param {SyntheticEvent} event
   */

  onChange(event) {
    this.changeValue(event.target.value);
  },

  render() {
    const {onChange} = this;

    return (
      <ControlWrapper {...this.getWrapperProps()}>
        <select {...this.getControlProps()} {...{onChange}}>
          {this.renderPlaceHolder()}
          {this.renderOptions()}
        </select>
      </ControlWrapper>
    );
  }
});

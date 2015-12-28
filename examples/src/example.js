import React from 'react';
import ReactDOM from 'react-dom';

import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import {addValidationRule, Form, Input, Select, Textarea} from '../../src';

const specialities = {
  doctor: 'Doctor',
  dentist: 'Dentist'
};

addValidationRule('sameAs', (values, value, field) => value === values[field]);

const Example = React.createClass({
  displayName: 'Example',

  getInitialState() {
    return {
      success: false
    };
  },

  /**
   * Called when the form is submitted and valid.
   */

  onValidSubmit() {
    this.setState({success: true});
  },

  /**
   * Manually reset form.
   */

  reset() {
    ReactDOM.findDOMNode(this.refs.form).reset();
  },

  /**
   * Render success message.
   *
   * @returns {ReactElement}
   */

  renderSuccessMessage() {
    if (!this.state.success)
      return null;

    return <Alert bsStyle="success">Your form was correctly submitted.</Alert>;
  },

  render() {
    return (
      <div>
        <Form className="form-horizontal" onValidSubmit={this.onValidSubmit} ref="form">
          <fieldset>
            <legend>Basic form with labels</legend>
            {this.renderSuccessMessage()}
            <Input label="Name" name="name" placeholder="Ex: Bergé" required/>
            <Input label="Firstname" name="firstname" placeholder="Ex: Greg" required/>
            <Input label="Zipcode" maxLength={6} name="zipcode" placeholder="Ex: 91200" required validations="isInt"/>
            <Select label="Speciality" name="speciality" options={specialities} placeholder="Choose a speciality" required/>
            <Textarea label="Comment" name="comment" placeholder="Any comment?" required rows={5}/>
            <div className="form-group">
              <Col sm={9} smOffset={3}>
                <Button bsStyle="primary" type="submit">Submit</Button>
                <Button bsStyle="default" type="reset">Reset</Button>
                <Button bsStyle="default" onClick={this.reset} type="button">Programmatic reset</Button>
              </Col>
            </div>
          </fieldset>
        </Form>

        <Form className="form-horizontal">
          <fieldset>
            <legend>Custom validation</legend>
            <Input label="Password" name="password" required type="password"/>
            <Input label="Confirm password" name="confirmPassword" required type="password" validations="sameAs:password"/>
            <div className="form-group">
              <Col sm={9} smOffset={3}>
                <Button bsStyle="primary" type="submit">Submit</Button>
              </Col>
            </div>
          </fieldset>
        </Form>

        <Form className="form-horizontal">
          <fieldset>
            <legend>Simple fields without label</legend>
            <Input name="name" placeholder="Name" required/>
            <br/>
            <Input name="firstname" placeholder="Firstname" required/>
          </fieldset>
        </Form>
      </div>
    );
  }
});

ReactDOM.render(<Example/>, document.getElementById('example'));
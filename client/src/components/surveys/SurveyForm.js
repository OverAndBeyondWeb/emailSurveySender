import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField';
import formFields from './formFields';
import validateEmails from '../../utils/validateEmails';



class SurveyForm extends Component {

  renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return <Field component={SurveyField} type="text" label={label} name={name} key={name} />
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
};

const validate = values => {
  const errors = {};

  _.each(formFields, ({ name }) => {

    errors.recipients = validateEmails(values.recipients);

    if (!values[name]) {
      name === 'recipients' 
      ? errors[name] = 'You must provide at least 1 recipient email'
      : errors[name] = `You must provide a ${name}`;
    }
    
  });

  return errors;
};

export default reduxForm({validate, form: 'surveyForm', destroyOnUnmount: false})(SurveyForm);
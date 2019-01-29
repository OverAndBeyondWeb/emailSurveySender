import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  {label: 'Survey Title', name: 'title'},
  {label: 'Subject Line', name: 'subject'},
  {label: 'Email Body', name: 'body'},
  {label: 'Recipient list', name: 'emails'},
];

class SurveyForm extends Component {

  renderFields = () => {
    return _.map(FIELDS, ({ label, name }) => {
      return <Field component={SurveyField} type="text" label={label} name={name} key={name} />
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

  _.each(FIELDS, ({ name }) => {

    errors.emails = validateEmails(values.emails);

    if (!values[name]) {
      name === 'emails' 
      ? errors[name] = 'You must provide at least 1 email'
      : errors[name] = `You must provide a ${name}`;
    }
    
  });

  return errors;
};

export default reduxForm({validate, form: 'surveyForm'})(SurveyForm);
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, form, submitSurvey }) => {

  const reviewFields = _.map(formFields, field => {
    return (
      <div key={field.label}>
        <label>{field.label}</label>
        <div>{form.surveyForm.values[field.name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please review your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
        Back
      </button>
      <button className="green btn-flat right white-text" onClick={() => submitSurvey(form.surveyForm.values)}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
};

const mapStateToProps = ({ form }) => {

  return { form };
}

export default connect(mapStateToProps, { submitSurvey: actions.submitSurvey})(SurveyFormReview);
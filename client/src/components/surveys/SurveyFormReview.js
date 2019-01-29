import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel }) => (
  <div>
    <h5>Please review your entries</h5>
    <button className="yellow darken-3 btn-flat" onClick={onCancel}>
      Back
    </button>
  </div>
);

const mapStateToProps = ({ form }) => {

  return { form };
}

export default connect(mapStateToProps)(SurveyFormReview);
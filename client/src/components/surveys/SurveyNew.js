import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <h1>New Survey</h1>
        <h3><SurveyForm /></h3>
      </div>
    );
  }
};

export default SurveyNew;
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


class SurveyNew extends Component {

  state = {
    showFormReview: false
  }

  renderContent = () => {
    return (
      this.state.showFormReview
      ? <SurveyFormReview onCancel={() => this.setState({showFormReview: false})}/>
      : <SurveyForm onFormSubmit={() => this.setState({showFormReview: true})}/>
    );
  }

  render() {
    return (
      <div>
        <h1>New Survey</h1>
        {this.renderContent()}
      </div>
    );
  }
};

export default reduxForm({form: 'surveyForm'})(SurveyNew);
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

// connecting redux form to this component without 
// the { destroyOnUnmount: false } option clears the 
// input fields when SurveyNew unmounts
export default reduxForm({form: 'surveyForm'})(SurveyNew);
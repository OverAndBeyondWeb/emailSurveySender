import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Payments from './Payments';

class Header extends Component {

  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Sign in with Google</a></li>
        );
      default:
        return [
          <Payments key={1} />,
          <li key={2}><a href="/api/logout">Logout</a></li>,
          <li key={3} style={{'marginRight': '10px'}}>credits: {this.props.auth.credits}</li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">Email Survey Sender</Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
};

const mapStateToProps = ({ auth }) => {
  return {auth};
};

export default connect(mapStateToProps)(Header);
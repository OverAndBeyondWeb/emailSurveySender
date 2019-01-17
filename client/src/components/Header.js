import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }
  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="" className="brand-logo">Email Survey Sender</a>
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
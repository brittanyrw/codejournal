import React, { Component } from 'react';
import Dashboard from '../Components/Dashboard';
import Footer from '../Components/Footer';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <div className="container">
          {
            isAuthenticated() && (
                <h4>
                  <Dashboard></Dashboard>
                </h4>
              )
          }
          {
            !isAuthenticated() && (
                <h4>
                  This is the homepage. You are not logged in! Please{' '}
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </a>
                  {' '}to continue.
                </h4>
              )
          }
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;

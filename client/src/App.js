import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import colors from './Components/colors';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const HomeNavigation = styled.div`
    padding: 20px;
    height: 80px;
    `;  

    return (
      <ThemeProvider theme={colors}>
        <div>
          <HomeNavigation>
            <div>
              <img src="../imgs/logo.svg" alt="Code journal logo"></img>
            </div>
            {
              !isAuthenticated() && (
                  <button onClick={this.login.bind(this)}> 
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>
                )
            }
          </HomeNavigation>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

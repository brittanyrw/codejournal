import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import colors from './Components/colors';
import theme from './Components/theme';

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

    const Logo = styled.img`
    height: 25px;
    float: left;
    `;  

    const LogInButton = styled.button`
    border: none;
    background: transparent;
    color: ${theme.offwhite};
    float: right;
    padding: 3px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: ${theme.yellow};
    }
    `;

    return (
      <ThemeProvider theme={colors}>
        <div>
          <HomeNavigation>
            <div>
              <Link to="/home">
                <Logo src="../imgs/logo.svg" alt="Code journal logo"></Logo>
              </Link>
            </div>
            {
              !isAuthenticated() && (
                  <LogInButton onClick={this.login.bind(this)}> 
                    Log In
                  </LogInButton>
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

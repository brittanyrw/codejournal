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

    const DashNavigation = styled.div`
    padding: 20px;
    height: 80px;
    text-align: center;  
    background: ${theme.pink}; 
      @media only screen and (min-width: 641px) {
        transition: margin-left .5s;
        margin-left: 100px;
      }
    `;  

    const HomeNavigation = styled.div`
    padding: 20px;
    height: 80px;
    text-align: center;   
    `;      

    const NavigationLinks = styled.div`
    display: inline-block;
    float: right;
    padding: 0 10px;
    `;

    const DashNavigationLogo = styled.div`
    display: inline-block;
    @media only screen and (min-width: 641px) {
      transition: margin-left .5s;
      margin-left: 100px;
    }
    `;

    const NavigationLogo = styled.div`
    display: inline-block;
    `;

    const Logo = styled.img`
      height: 20px;
      margin: 0 auto;
      padding: 0 50px;
        @media only screen and (min-width: 641px) {
          padding: 0;
          height: 30px;
          transition: 1s;
        }
    `;  

    const AccountButton = styled.button`
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
          { 
            !isAuthenticated() && (
              <div>
                <HomeNavigation>
                  <NavigationLogo>
                    <Link to="/home">
                      <Logo src="../imgs/logo.svg" alt="Code journal logo"></Logo>
                    </Link>
                  </NavigationLogo>
                  <NavigationLinks>
                  {
                    !isAuthenticated() && (
                        <AccountButton onClick={this.login.bind(this)}> 
                          Log In
                        </AccountButton>
                      )
                  }
                  {
                    isAuthenticated() && (
                        <AccountButton
                          onClick={this.goTo.bind(this, 'profile')}
                        >
                          Profile
                        </AccountButton>
                      )
                  }
                  {
                    isAuthenticated() && (
                        <AccountButton
                          onClick={this.logout.bind(this)}
                        >
                          Log Out
                        </AccountButton>
                      )
                  }
                  </NavigationLinks>
                </HomeNavigation>

                <div className="container">
                  {this.props.children}
                </div>
              </div>
            )
          }
          { 
            isAuthenticated() && (
              <div>
              <DashNavigation>
                <DashNavigationLogo>
                  <Link to="/home">
                    <Logo src="../imgs/logo.svg" alt="Code journal logo"></Logo>
                  </Link>
                </DashNavigationLogo>
                <NavigationLinks>
                {
                  !isAuthenticated() && (
                      <AccountButton onClick={this.login.bind(this)}> 
                        Log In
                      </AccountButton>
                    )
                }
                {/* {
                  isAuthenticated() && (
                      <AccountButton
                        onClick={this.goTo.bind(this, 'profile')}
                      >
                        Profile
                      </AccountButton>
                    )
                } */}
                {
                  isAuthenticated() && (
                      <AccountButton
                        onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </AccountButton>
                    )
                }
                </NavigationLinks>
              </DashNavigation>

              <div className="container">
                {this.props.children}
              </div>
            </div>
            )
          }
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Dashboard from '../Components/Dashboard';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import theme from '../Components/colors';

class Home extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const HomeHeader = styled.section`
      padding: 20px 20px 0 20px;
  `;      

    const HeaderImage = styled.img`
      margin: 20px 0 0 0;
      border-radius: 5px 5px 0 0;
      width: 90%;
      max-width: 700px;
    `;

    const HeaderText = styled.h1`
      font-weight: 300;
    `;    

    const HomeFeatures = styled.section`
      padding: 20px;
      background: white;
      color: ${theme.black};
      margin-top: -4.2px;
    `;  

    const FeatureImage = styled.img`
      border-radius: 5px;
    `;    

    const Button = styled.button`
      width: 250px;
      height: 50px;
      cursor: pointer;
      margin: 10px;
      border: none;
      font-size: 20px;
      font-weight: 400;
      border: 2px solid ${theme.blue};
        @media only screen and (min-width: 641px) {
              margin: 20px 10px;
              width: 200px;
          } 	
    `;  

    const FeatureButton = styled(Button)`
      background: ${theme.offwhite};
      color: ${theme.blue};
      outline: 2px solid ${theme.offwhite};
    `;

    const SignUpButton = styled(Button)`
      background: ${theme.yellow};
      color: ${theme.blue};
      outline: 2px solid ${theme.yellow};
    `;        

    const FeatureBox = styled.div`
      @media only screen and (min-width: 641px) {
            display: inline-block;
            margin: 10px 20px;
        } 		
    `;            

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
                <div>
                  <HomeHeader>
                    <HeaderText>Organize your learning with a personalized dashboard.</HeaderText>
                      <div>
                        <a href="#feature-section"><FeatureButton>FEATURES</FeatureButton></a>
                        <SignUpButton onClick={this.login.bind(this)}>SIGN UP</SignUpButton>
                      </div>
                    <HeaderImage src="http://via.placeholder.com/800x450"></HeaderImage>
                  </HomeHeader>
                  <HomeFeatures>
                    <h1>Features and Tools</h1>
                    <FeatureBox>
                      <FeatureImage src="http://via.placeholder.com/350x300"></FeatureImage>
                      <p>Short description of the feature.</p>
                    </FeatureBox>
                    <FeatureBox>
                      <FeatureImage src="http://via.placeholder.com/350x300"></FeatureImage>
                      <p>Short description of the feature.</p>
                    </FeatureBox>
                    <FeatureBox>
                      <FeatureImage src="http://via.placeholder.com/350x300"></FeatureImage>
                      <p>Short description of the feature.</p>
                    </FeatureBox>            
                  </HomeFeatures>
                </div>
              )
          }
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;

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
      max-width: 1000px;
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
      width: 300px;
      margin: auto;
      @media only screen and (min-width: 641px) {
            display: inline-block;
            margin: 10px 20px;
        } 		
    `;          
    
    return (
      <div>
        <div>
          {
            isAuthenticated() && (
                <div>
                  <Dashboard></Dashboard>
                </div>
              )
          }
          {
            !isAuthenticated() && (
                <div>
                  <HomeHeader>
                    <HeaderText>Organize your learning with a personalized dashboard.</HeaderText>
                      <div>
                        <a href="#feature-section" className="homepage-link"><FeatureButton>FEATURES</FeatureButton></a>
                        <SignUpButton onClick={this.login.bind(this)}>SIGN UP</SignUpButton>
                      </div>
                    <HeaderImage src="../imgs/home-image.svg"></HeaderImage>
                  </HomeHeader>
                  <HomeFeatures id="feature-section">
                    <h1>Features and Tools</h1>
                    <FeatureBox>
                      <FeatureImage src="../imgs/home-page-square.svg"></FeatureImage>
                      <p>Organize your coding resources, tutorials, courses and projects in one central location.</p>
                    </FeatureBox>
                    <FeatureBox>
                    <FeatureImage src="../imgs/home-page-stats.svg"></FeatureImage>
                      <p>Keep track of your Github, social media and project statistics in your dashboard.</p>                      
                    </FeatureBox>
                    <FeatureBox>
                      <FeatureImage src="../imgs/home-page-check.svg"></FeatureImage>
                      <p>View your progress and stay motivated while you learn new subjects.</p>
                    </FeatureBox>            
                  </HomeFeatures>
                  <Footer></Footer>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

export default Home;

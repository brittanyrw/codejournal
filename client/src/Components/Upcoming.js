import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';

import DashNavigation from './DashNavigation';
import DashFooter from './DashFooter';

class Upcoming extends Component {

  render() {

    const DashContainer = styled.section`
      background: white;
      margin-bottom: 80px;
      @media only screen and (min-width: 641px) {
        transition: margin-left .5s;
        margin-left: 100px;
      }
    `;

    const FeaturesWrapper = styled.section`
      padding: 20px;
      color: ${theme.black};
    `;

    const FeatureSquare = styled.div`
        border-radius: 5px;
        height: 200px;
        width: 300px;
        margin: 10px;
        display: inline-block;
        vertical-align: top;
        padding: 10px;
        border: 2px solid ${theme.offwhite};
        color: ${theme.gray};
        &:hover {
          color:  ${theme.black};
          border: 2px solid ${theme.black};
        }
    `;  


    return (
      <DashContainer>
        <DashNavigation></DashNavigation>
        <FeaturesWrapper>
          <h1>Upcoming Features</h1>
          <p>Stay tuned for updates and additional features. The list below includes features in the pipeline for development.</p>
          <FeatureSquare>
            <h2>Curated Squares</h2>
            <p>Pre-made subject squares of top rated resources, project suggestions and courses that you can import into your dashboard.</p>
          </FeatureSquare>                    
          <FeatureSquare>
            <h2>Notifications</h2>
            <p>Recieve reminders for uncompleted dashboard items and upcoming events.</p>            
          </FeatureSquare>
          <FeatureSquare>
            <h2>Social Media Connections</h2>
            <p>Connect to Twitter, Github and more to monitor your coding progress.</p>            
          </FeatureSquare>
          <FeatureSquare>
            <h2>Share Dashboards</h2>
            <p>Share your dashboard or individual squares with other users.</p>            
          </FeatureSquare>                    
        </FeaturesWrapper>
        <DashFooter></DashFooter>
      </DashContainer>
    );
  }
}

export default Upcoming;
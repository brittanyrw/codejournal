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
    `;

    const FeatureSquare = styled.div`

    `;

    const FeatureSquareTitle = styled.h1`

    `;    

    const CuratedSquare = styled(FeatureSquare)`
      
    `;


    return (
      <DashContainer>
        <DashNavigation></DashNavigation>
        <FeaturesWrapper>
          <CuratedSquare>
            <FeatureSquareTitle>Curated Squares</FeatureSquareTitle>
          </CuratedSquare>                    
          <FeatureSquare>
            <FeatureSquareTitle>Notifications</FeatureSquareTitle>
          </FeatureSquare>
          <FeatureSquare>
            <FeatureSquareTitle>Social Media Connections</FeatureSquareTitle>
          </FeatureSquare>
          <FeatureSquare>
            <FeatureSquareTitle>Share Dashboards</FeatureSquareTitle>
          </FeatureSquare>                    
        </FeaturesWrapper>
        <DashFooter></DashFooter>
      </DashContainer>
    );
  }
}

export default Upcoming;
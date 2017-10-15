import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';

import DashNavigation from './DashNavigation';
import DashFooter from './DashFooter';
import DashElements from './DashElements';

class Dashboard extends Component {
  
  render() {

    const DashContainer = styled.section`
      background: ${theme.offwhite};
      height: 100vh;
      padding: 20px 0;
      @media only screen and (min-width: 641px) {
        transition: margin-left .5s;
        margin-left: 100px;
      }
    `;

    return (
      <DashContainer>
        <DashNavigation></DashNavigation>
        <div>
          <DashElements></DashElements>
        </div>
        <DashFooter></DashFooter>
      </DashContainer>
    );
  }
}

export default Dashboard;
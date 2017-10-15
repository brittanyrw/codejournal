import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';

import DashNavigation from './DashNavigation';
import DashFooter from './DashFooter';
import DashElements from './DashElements';
import DashSquare from './DashSquare';

class Dashboard extends Component {
  
  render() {

    const DashContainer = styled.section`
      background: ${theme.offwhite};
      padding: 20px 0;
      margin-bottom: 80px;
      color: ${theme.black};
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
        <div>
          <DashSquare type="project"></DashSquare>
          <DashSquare type="tutorial"></DashSquare>
          <DashSquare type="course"></DashSquare>
          <DashSquare type="event"></DashSquare>
          <DashSquare type="resource"></DashSquare>                               
        </div>
        <DashFooter></DashFooter>
      </DashContainer>
    );
  }
}

export default Dashboard;
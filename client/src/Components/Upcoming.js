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
      height: 100vh;
      @media only screen and (min-width: 641px) {
        transition: margin-left .5s;
        margin-left: 100px;
      }
  `;


    return (
      <DashContainer>
        <DashNavigation></DashNavigation>
        <div>Upcoming Features</div>
        <DashFooter></DashFooter>
    </DashContainer>
    );
  }
}

export default Upcoming;
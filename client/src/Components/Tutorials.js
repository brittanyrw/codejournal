import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import DashNavigation from './DashNavigation';
import DashFooter from './DashFooter';

class Tutorials extends Component {

  render() {

    const DashContainer = styled.section`
    background: white;
    height: 1000px;
    @media only screen and (min-width: 641px) {
      transition: margin-left .5s;
      margin-left: 100px;
    }
  `;


    return (
      <DashContainer>
        <DashNavigation></DashNavigation>
        <div>Tutorials</div>
        <DashFooter></DashFooter>
    </DashContainer>
    );
  }
}

export default Tutorials;
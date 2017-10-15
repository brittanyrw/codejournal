import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';

class DashElements extends Component {

  render() {

    const DashElementContainer = styled.section `
        height: 150px;
        border-radius: 5px;
        width: 90%;
        max-width: 500px;
        background: white;
        color: black;
        font-weight: 300;
        margin: 0 auto;
        padding: 20px;
    `;

    return (
        <DashElementContainer>Dash Elements</DashElementContainer>
    );
  }
}

export default DashElements;
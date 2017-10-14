import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';

class Support extends Component {
  
  render() {

    const SocialIcons = styled.div`
        display: inline-block;
        float: right;
    `; 

    const iconStyle = {
        color: 'white',
        padding: '0 5px'
      }

    return (
      <div>
        Support
      </div>
    );
  }
}

export default Support;
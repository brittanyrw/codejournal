import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';

// This is the footer for the homepage, for users that are not logged in.

class Footer extends Component {
  
  render() {

    const Footer = styled.footer`
        color: white;
        background: ${theme.black};
        padding: 20px;
        height: 80px;
        width: 100%;
        position: absolute;
        bottom: 0;
        margin: 80px 0 -80px 0;
    `;

    const FooterLink = styled.a`
        color: white;
        float: left;
        padding: 15px 0;
    `;    

    const iconStyle = {
        color: 'white',
        padding: '0 5px'
      }

    return (
      <Footer>
        <FooterLink href="#">FAQ & Feedback</FooterLink>
        <div>
            <FontAwesome name="twitter" size="2x" style={iconStyle} />
            <FontAwesome name="github-alt" size="2x" style={iconStyle} />
        </div>
      </Footer>
    );
  }
}

export default Footer;
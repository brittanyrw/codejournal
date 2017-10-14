import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

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

    const FooterLink = styled(Link)`
        color: white;
        float: left;
        padding: 15px 0;
        display: inline-block;
        &:hover {
            color: ${theme.pink};
        }
    `;    

    const SocialIcons = styled.div`
        display: inline-block;
        float: right;
    `; 

    const iconStyle = {
        color: 'white',
        padding: '0 5px'
      }

    return (
      <Footer>
        <div>
            <FooterLink to="/support">FAQ & Feedback</FooterLink>
        </div>
        <SocialIcons>
            <a href="http://twitter.com" target="_blank"><FontAwesome name="twitter" size="2x" style={iconStyle} /></a>
            <a href="http://github.com" target="_blank"><FontAwesome name="github-alt" size="2x" style={iconStyle} /></a>
        </SocialIcons>
      </Footer>
    );
  }
}

export default Footer;
import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';

import Footer from './Footer';

class Support extends Component {
  
  render() {
    const SupportBody = styled.section`
        margin: 40px;
    `;   

    const HeaderText = styled.h1`
        font-weight: 300;
    `;

    const HeaderImage = styled.img`
        margin: 20px auto;
        border-radius: 5px 5px 0 0;
        width: 100%;
        max-width: 800px;
        height: 200px;
    `;

    const SupportSection = styled.section`
        background-color: ${theme.offwhite};
        border-radius: 5px;
        color: ${theme.black};
        padding: 20px;
        max-width: 800px;
        margin: auto;
        text-align: left;
    `;

    return (
      <div>
        <SupportBody>
            <section>
                <HeaderText>Code Journal Help</HeaderText>
                <HeaderImage src="http://via.placeholder.com/250x150"></HeaderImage>
            </section>
            <SupportSection>
                <h2>About Code Journal</h2>
                <p>Authentic chillwave bitters pug fingerstache tote bag wolf wayfarers lo-fi DIY celiac XOXO squid four dollar toast. Occupy beard gochujang hashtag subway tile irony poutine affogato yr. </p>
                <p>Tofu mlkshk post-ironic, messenger bag pork belly beard tilde hashtag taiyaki pour-over stumptown. Vice vinyl try-hard snackwave farm-to-table edison bulb cold-pressed. </p>
                
                <h2>Code Journal Features</h2>
                <p>Wayfarers hell of messenger bag flexitarian tbh. Taxidermy salvia celiac kombucha sartorial jean shorts edison bulb.</p>
                
                <h3>Feature Name</h3>
                <p>Gochujang affogato mlkshk PBR&B green juice forage cronut prism coloring book occupy blue bottle sustainable. </p>
                <h3>Feature Name</h3>                
                <p>Raw denim intelligentsia thundercats vexillologist fanny pack tofu gentrify craft beer mlkshk iceland brunch godard tumeric quinoa. </p>
                <h3>Feature Name</h3>                
                <p>Paleo tacos helvetica DIY polaroid everyday carry woke. </p>                                                
                <h2>Upcoming Features</h2>
                <p>Next level banjo squid</p>
                <p>Cliche truffaut polaroid direct</p>
                <p>Selvage mlkshk cliche polaroid.</p>   

                <h2>Contact Code Journal</h2>
                <p>Social Media Here</p>  
                <p>Send an email</p>
                <a href="https://codejournal.typeform.com/to/rThxvX" target="_blank">Launch Support & Feedback Form</a>                                             
            </SupportSection>
        </SupportBody>
        <Footer></Footer>
      </div>
    );
  }
}

export default Support;
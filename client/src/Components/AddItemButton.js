import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';

class AddItemButton extends Component {

  render() {

    const AddItemSquare = styled.div`
        padding: 10px;
        border-radius: 5px;
        color: white;
        background: ${theme.black};
        vertical-align: top;
        margin-top: 10px;
        @media only screen and (min-width: 641px) {
            width: 100px;
            height: 100px;
            display: inline-block;
            margin: 5px;
        }
  `;

    const AddItemHeader = styled.p`
        margin: 0;
    `;

    const iconStyle = {
        color: '#FFFFFF'
    }


    return (
        <AddItemSquare>
            <Link to="/additem">
                <FontAwesome className="icons" name="plus-square" size="2x" style={iconStyle}/>
            </Link>
            <AddItemHeader>Add Items</AddItemHeader>
        </AddItemSquare>
    );
  }
}

export default AddItemButton;
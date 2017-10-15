import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class DashNavigation extends Component {
   
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
      }
  
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

      
  render() {

    const SideNavigation = styled.nav`
    height: 100%; 
    position: fixed; 
    z-index: 1; 
    top: 0;
    left: 0;
    background-color: ${theme.black};
    overflow-x: hidden;  
    transition: 1s; 
    text-align: left;
    @media only screen and (min-width: 641px) {
      width: 100px;
      left: 0;
      text-align: center;
      padding-top: 70px;
    }
  `;   

  const HamburgerNavigationMenu = styled.span`
    position: absolute;
    left: 20px;
    top: 20px;
    color: ${theme.offwhite};  
    @media only screen and (min-width: 641px) {
      display: none;
    }
  `;

  const NavigationList = styled.ul`
    list-style: none;
    padding: 0 10px;
  `;    
  
  const DashboardLink = styled(Link)`
    font-weight: 300;
  `;

  const NavigationListItem = styled.li`
    list-style: none;
    font-size: 15px;
    margin: 25px 0;
    transition: 0.3s;
  `;

  const CloseButton = styled.a`
    color: white;
    padding: 20px 0; 
    display: none;
      @media only screen and (max-width: 640px) {
        display: block;
      }
  `;    


    return (
        <div>
            <HamburgerNavigationMenu onClick={this.handleClick} className="hamburger-navigation-menu" id="hamburger-navigation-menu">
                <FontAwesome id="hambuger-menu" name="bars" size="2x" aria-hidden="true" aria-label="Menu" aria-controls="navigation" />
            </HamburgerNavigationMenu>
            <SideNavigation id="side-navigation" className={this.state.isToggleOn ? "close-side-navigation" : "open-side-navigation"}>
                    <NavigationList>
                    <li>
                    <CloseButton className="close-button" onClick={this.handleClick}>&times;</CloseButton>
                    </li>
                    <NavigationListItem>  
                    <DashboardLink to="/home" className="dashboard-navigation-link">              
                    <FontAwesome className = "icons" name="home" size="2x" />
                        Dashboard
                    </DashboardLink>
                    </NavigationListItem>
                    {/* <NavigationListItem>
                    <DashboardLink to="/settings" className="dashboard-navigation-link"> 
                        <FontAwesome className="icons" name="cog" size="2x" />
                        Settings
                    </DashboardLink>
                    </NavigationListItem> */}
                    <NavigationListItem>
                    <DashboardLink to="/projects" className="dashboard-navigation-link">
                        <FontAwesome className="icons" name="bookmark" size="2x" />
                        Projects
                        </DashboardLink>
                    </NavigationListItem>
                    <NavigationListItem>
                    <DashboardLink to="/tutorials" className="dashboard-navigation-link">
                        <FontAwesome className="icons" name="code" size="2x" />
                        Tutorials
                    </DashboardLink>
                    </NavigationListItem> 
                    <NavigationListItem>
                    <DashboardLink to="/courses" className="dashboard-navigation-link">
                        <FontAwesome className="icons" name="book" size="2x" />
                        Courses
                    </DashboardLink>
                    </NavigationListItem>
                    <NavigationListItem>
                    <DashboardLink to="/events" className="dashboard-navigation-link">
                        <FontAwesome className="icons" name="calendar" size="2x" />
                        Events
                    </DashboardLink>
                    </NavigationListItem>
                    <NavigationListItem>
                    <DashboardLink to="/resources" className="dashboard-navigation-link">
                        <FontAwesome className="icons" name="sticky-note" size="2x" />
                        Resources
                    </DashboardLink>
                    </NavigationListItem>                
                </NavigationList>        
        </SideNavigation>
       </div>
    );
  }
}

export default DashNavigation;
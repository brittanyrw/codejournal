import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class DashSquare extends Component {

  render() {

    const Square = styled.div`
    background: white;
    border-radius: 5px;
    padding: 14px 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,.16);
    height: 365px;
    width: 30%;
    min-width: 320px;
    display: inline-block;
    vertical-align: top;
    `;

    const SquareTitle = styled.h1`
        text-align: center;
        padding: 0 0 20px 0;
        border-bottom: 1px solid ${theme.gray};
        margin: 0;	
    `;  

    const SquareWrapper = styled.div`
        display: inline-block;
        margin: 20px 1.5%;
    `;

    const ProjectSquare = styled(Square)`
        border-top: 5px solid ${theme.pink};
    `;

    const TutorialSquare = styled(Square)`
        border-top: 5px solid ${theme.blue};
    `;  

    const CourseSquare = styled(Square)`
        border-top: 5px solid ${theme.green};
    `;

    const ResourceSquare = styled(Square)`
        border-top: 5px solid ${theme.yellow};
    `; 

    const EventSquare = styled(Square)`
        border-top: 5px solid ${theme.purple};
    `; 

    const linkStyle = {
        float: 'right',
        padding: '20px 0',
        clear: 'both'
    }     


    return (
        <SquareWrapper>
            {this.props.type === 'project' ?
                <ProjectSquare>  
                    <SquareTitle>Projects</SquareTitle>	    			    							
                    <Link to="/projects" style={linkStyle}>View all</Link>                                
                </ProjectSquare>
            : this.props.type === 'tutorial' ? 
                <TutorialSquare>  
                    <SquareTitle>Tutorials</SquareTitle>
 	    			    				
                    <Link to="/tutorials" style={linkStyle}>View all</Link>                                  
                </TutorialSquare>	
            : this.props.type ==='course' ? 
                <CourseSquare>  
                    <SquareTitle>Courses</SquareTitle>			
	    			    					
                    <Link to="/courses" style={linkStyle}>View all</Link>                                  
                </CourseSquare>
            : this.props.type === 'event' ? 
                <EventSquare>  
                    <SquareTitle>Events</SquareTitle>
	    			    		 			    					
                    <Link to="/events" style={linkStyle}>View all</Link>                                  
                </EventSquare>	
            : this.props.type === 'resource' ? 
                <ResourceSquare>  
                    <SquareTitle>Resource</SquareTitle>	
  
                    <Link to="/resources" style={linkStyle}>View all</Link>                                  
                </ResourceSquare>	

                : null }
        </SquareWrapper>
    );
  }
}

export default DashSquare;
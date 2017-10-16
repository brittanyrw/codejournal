import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './colors';

import AddItemsSquare from './AddItemButton';

class DashStats extends Component {

  render() {

    const DashStatsContainer = styled.section `
        border-radius: 5px;
        width: 80%;
        color: black;
        font-weight: 300;
        margin: 0 auto 20px 0;
        text-align: center;
        display: inline-block;
        vertical-align: top;
        padding-top: 10px;
    `;

    const StatsSquare = styled.div`
        padding: 10px;
        border-radius: 5px;
        color: white;
        @media only screen and (min-width: 641px) {
            width: 100px;
            height: 100px;
            padding: 20px;
            display: inline-block;
            margin: 5px;
          }
    `;

    const ProjectStatsSquare = styled(StatsSquare)`
        background-color: ${theme.pink};
    `;

    const TutorialStatsSquare = styled(StatsSquare)`
        background-color: ${theme.blue};
    `;

    const EventStatsSquare = styled(StatsSquare)`
        background-color: ${theme.purple};
    `;

    const CourseStatsSquare = styled(StatsSquare)`
        background-color: ${theme.green};
    `;

    const StatsNumber = styled.div`
        font-weight: bold;
        display: inline-block;
        padding: 0 5px 0 0;
            @media only screen and (min-width: 641px) {
                font-size: 30px;
                padding: 0;
            }
    `;  

    return (
        <DashStatsContainer>
            <ProjectStatsSquare>
                <StatsNumber>2</StatsNumber>
                Projects
            </ProjectStatsSquare>
            <TutorialStatsSquare>
                <StatsNumber>11</StatsNumber>
                Tutorials
            </TutorialStatsSquare>
            <CourseStatsSquare>
                <StatsNumber>5</StatsNumber>
                Courses
            </CourseStatsSquare>
            <EventStatsSquare>
                <StatsNumber>10</StatsNumber>
                Events
            </EventStatsSquare>   
            <AddItemsSquare></AddItemsSquare>                    
        </DashStatsContainer>
    );
  }
}

export default DashStats;
import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Support from './Components/Support';
import Dashboard from './Components/Dashboard';
import Courses from './Components/Courses';
import Projects from './Components/Projects';
import Tutorials from './Components/Tutorials';
import Events from './Components/Events';
import Resources from './Components/Resources';
import DashSupport from './Components/DashSupport';
import Upcoming from './Components/Upcoming';
import Profile from './Profile/Profile';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

// TO DO: When link is clicked, page needs to scroll to the top. Example - clicking on FAQ & Support while logged in as a user on the dashboard.

export const makeMainRoutes = () => {
  // TO DO: Clean up react router routes. 
  return (
    <Router history={history} component={App} >
      <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/support" render={(props) => <Support auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/dashboard" render={(props) => (
            !auth.isAuthenticated() ? ( <Redirect to="/home"/> ) : ( <Dashboard auth={auth} {...props} /> ))} />
          
          <Route path="/resources" render={(props) => (
            !auth.isAuthenticated() ? ( <Redirect to="/home"/> ) : ( <Resources auth={auth} {...props} /> ))} />          

          <Route path="/courses" render={(props) => (
            !auth.isAuthenticated() ? ( <Redirect to="/home"/> ) : ( <Courses auth={auth} {...props} /> ))} /> 

          <Route path="/dashboard-support" render={(props) => (
            !auth.isAuthenticated() ? ( <Redirect to="/home"/> ) : ( <DashSupport auth={auth} {...props} /> ))} /> 

          <Route path="/upcoming" render={(props) => (
            !auth.isAuthenticated() ? ( <Redirect to="/home"/> ) : ( <Upcoming auth={auth} {...props} /> ))} />

          <Route path="/tutorials" render={(props) => (
            !auth.isAuthenticated() ? ( <Redirect to="/home"/> ) : ( <Tutorials auth={auth} {...props} /> ))} /> 

          <Route path="/projects" render={(props) => (
            !auth.isAuthenticated() ? ( <Redirect to="/home"/> ) : ( <Projects auth={auth} {...props} /> ))} /> 

          <Route path="/events" render={(props) => (
            !auth.isAuthenticated() ? ( <Redirect to="/home"/> ) : ( <Events auth={auth} {...props} /> ))} /> 

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>       
      </div>
    </Router>
  );
}

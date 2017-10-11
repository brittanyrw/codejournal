import React, { Component } from 'react';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <div header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <div><div glyph="user" /> Nickname</div></div>
              <h3>{profile.nickname}</h3>
              <h3>{profile.sub}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </div>
        </div>
    );
  }
}

export default Profile;
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Avatar from '@mui/material/Avatar';
/**
 *
 * @param {*} props: setUser state as addUser from App
 * @returns
 */
const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div id="profile-container">
        <h2 id="profile-name">
          {' '}
          <Avatar
            sx={{
              width: '5rem',
              height: '5rem',
            }}
            alt="Me"
            src={user.picture}
          />
          {user.name}
        </h2>
        <p id="profile-slackusername">
          Slack Username:
          <br /> {props.slackusername}
        </p>
      </div>
    )
  );
};

export default Profile;

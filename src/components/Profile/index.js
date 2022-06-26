import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
/**
 *
 * @param {*} props: setUser state as addUser from App
 * @returns
 */
const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      props.addUser(user);
    }
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div id="profile-container">
        {/* <img id="profile-picture" src={user.picture} alt={user.name} /> */}
        <h2 id="profile-name">
          {' '}
          <Avatar
            sx={{
              width: 'auto',
              heigt: '1rem',
              marginRight: '1rem',
            }}
            alt="Me"
            src={user.picture}
          />
          {user.name}
        </h2>
        {/* <p id="profile-email">{user.email}</p> */}

        <p id="profile-slackusername">
          Slack Username:
          <br /> {props.slackusername}
        </p>
      </div>
    )
  );
};

export default Profile;

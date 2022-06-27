import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Button from '@mui/material/Button';

/*
Logout button component from auth0, used alongside the login button component and the profile component
Props: user -> state given from App, setState -> setState given from App. Used to keep track of if there is a current user. 
*/
function LogoutButton(props) {
  const { logout } = useAuth0();
  function logoutUser() {
    props.setUser({});
    props.setNewUser(false);
    logout({ returnTo: window.location.origin });
  }
  return (
    <Button
      id="logoutBtn"
      variant="outlined"
      sx={{
        color: 'black',
        backgroundColor: '#dcdde1',
        borderColor: '#192a56',
      }}
      onClick={() => logoutUser()}
    >
      Log Out
    </Button>
  );
}

export default LogoutButton;

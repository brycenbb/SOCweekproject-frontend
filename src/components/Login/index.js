import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "@mui/material/Button";

import "./Login.css";

/* Login button component from auth0, used alongside the logout button 
   component and the profile component
*/

/*The sx prop in the Button element allows styling of the MUI elements directly in JSX */

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      id="login-btn"
      variant="outlined"
      sx={{
        color: "black",
        backgroundColor: "#dcdde1",
        borderColor: "#192a56",
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Header";
import "./Settings.css";

/**
 * @returns A page that gives the functionality for the user to update the slackusername they provided to the database
 */

function Settings() {
  const [currName, setName] = useState("");
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    async function Fetch() {
      let response = await fetch(
        `http://localhost:3001/users?email=${user.email}`
      );
      let json = await response.json();
      if (json.data.length === 0) {
        setName("");
      } else {
        setName(json.data[0].slackusername);
      }
    }
    Fetch();
  }, [currName, user.email]);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`http://localhost:3001/users?email=${user.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slackUsername: e.target.elements[0].value,
      }),
    });
    window.location.reload();
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <Header></Header>
        <main id="settings-main">
          <form
            id="settings-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <AccountCircle
                  sx={{ color: "var(--socblue)", mr: 1, my: 0.5, mb: 1.5 }}
                  fontSize="large"
                />
                <TextField
                  sx={{
                    color: "#4a90e2",
                    border: "#dcdde1",
                  }}
                  variant="outlined"
                  label="Slack Username:"
                  type="text"
                  id="username-input"
                  placeholder={currName}
                  required
                ></TextField>
              </Box>
            </div>
            <Button type="submit" variant="contained">
              Update username
            </Button>
          </form>
        </main>
      </div>
    )
  );
}
export default Settings;

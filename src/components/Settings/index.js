import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

/**
 *
 * @param {*} props: user given from App.
 * @returns A page that gives the functionality for the user to update the slackusername they provided to the database
 */
function Settings(props) {
  const [currName, setName] = useState(false);
  const [placeholderName, setPlaceHolder] = useState("");
  const user = useRef("");
  useEffect(() => {
    async function Fetch() {
      let response = await fetch(
        `http://localhost:3001/users?email=${props.user.email}`
      );
      let json = await response.json();
      if (json.data.length === 0) {
        user.current = "";
      } else {
        user.current = json.data[0];
      }
      setPlaceHolder("");
    }
    Fetch();
  }, [props.user.email]);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`http://localhost:3001/users?email=${user.current.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slackUsername: e.target.elements[0].value,
      }),
    });
    user.current.slackusername = e.target.elements[0].value;
    setName(!currName);
    window.location.reload();
  }
  return (
    <div>
      <Link to="/" className="blackText">
        Home
      </Link>
      <main id="settingsMain">
        <form
          id="settingsForm"
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
                id="usernameInput"
                placeholder={user.current.slackusername}
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
  );
}
export default Settings;

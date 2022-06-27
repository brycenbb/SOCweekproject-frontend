// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';
import Menu from '../Menu';
/*
Props: Logged -> Keeps track of if a user is logged in to determine if New Entry should be disabled.
*/
function Header() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <header>
      <nav className="navbar">
        {/* {isAuthenticated && (
        <Button
          variant="contained"
          onClick={() => {
            document
              .querySelector('.modalcontainer2')
              .classList.remove('hidden');
          }}
        >
          New Entry
        </Button>
      )}
      {!isAuthenticated && (
        <Button
          disabled
          sx={{
            backgroundColor: '#dcdde1',
          }}
          onClick={() => {
            document
              .querySelector('.modalcontainer2')
              .classList.remove('hidden');
          }}
        >
          New Entry
        </Button>
      )} */}
        {/* <Link className="homeLink" to="/">
          <Button variant="contained">Home</Button>
        </Link>
        <Link className="resourcesLink" to="/resources">
          <Button variant="contained">Resources</Button>
        </Link>
        <Link className="diaryLink" to="/diary">
          <Button variant="contained">Diary</Button>
        </Link>
        <Link to="/settings">
          <Button variant="contained">Settings</Button>
        </Link> */}
        <Menu></Menu>
      </nav>
    </header>
  );
}

export default Header;

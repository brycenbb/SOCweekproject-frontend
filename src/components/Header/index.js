import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

/*
Props: Logged -> Keeps track of if a user is logged in to determine if New Entry should be disabled.
*/
function Header({ logged }) {
  return (
    <header>
      <nav className="navbar">
        {logged && (
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
        {!logged && (
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
        )}
        <Link className="homeLink" to="/">
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
        </Link>
      </nav>
    </header>
  );
}

export default Header;

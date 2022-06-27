import Header from '../Header';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js';
// import Menu from '../Menu';
import { Link } from 'react-router-dom';
import Resources from '../Resources';
import PanicPicture from '../../Assets/PanicButton.png';
import NotesForm from '../NotesForm/index.js';
import ProgressBar from '../ProgressBar';
import Button from '../Button';
import { useEffect, useState } from 'react';
import Prompt from '../Prompt';
import { useAuth0 } from '@auth0/auth0-react';

/*Props: user-> state from App, setUser-> setState from App */
function Home() {
  const [newUser, setNewUser] = useState(false);
  const [slack, setSlackName] = useState('');
  const { user, isLoading } = useAuth0();

  //UseEffect to determine if a user has a slackusername present in the database and if not starts the process of prompting them to do so.
  useEffect(() => {
    async function Fetch() {
      let response = await fetch(
        `http://localhost:3001/users?email=${user.email}`
      );
      let json = await response.json();
      let dataArr = json.data;

      //If the length is 0 then the user has succesfully logged in and we need to add them to the database and prompt them to make a username
      if (dataArr.length === 0) {
        setNewUser(true);
      } else if (slack !== dataArr[0].slackusername) {
        setSlackName(dataArr[0].slackusername);
        setNewUser(false);
      }
    }
    if (user !== undefined) {
      Fetch();
    }
  }, [user, slack]);

  //Boolean to keep track of log in status of current user
  let islogged = false;
  if (user !== undefined) {
    islogged = true;
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="App">
      <Header />
      {!user && <LoginButton />}
      {islogged && <p className="centerMe">Your Hero's Journey Progress</p>}
      {islogged && <ProgressBar />}

      <Profile slackusername={slack}></Profile>
      {newUser && <Prompt email={user.email} />}
      {islogged && <LogoutButton />}
      <Link className="panicBox" to="/panic1">
        <Button src={PanicPicture}> </Button>
      </Link>
      <NotesForm />
      <Resources />
    </div>
  );
}
export default Home;

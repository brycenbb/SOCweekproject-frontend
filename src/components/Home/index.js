import Header from '../Header';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js';
import { Link } from 'react-router-dom';
import Resources from '../Resources';
import PanicPicture from '../../Assets/PanicButton.png';
import NotesForm from '../NotesForm/index.js';
import ProgressBar from '../ProgressBar';
import Button from '../Button';
import { useEffect, useState } from 'react';
import Prompt from '../Prompt';

/*Props: user-> state from App, setUser-> setState from App */
function Home(props) {
  const [newUser, setNewUser] = useState(false);
  const [slack, setSlackName] = useState('');

  //UseEffect to determine if a user has a slackusername present in the database and if not starts the process of prompting them to do so.
  useEffect(() => {
    async function Fetch() {
      let email = props.user.email;
      let response = await fetch(`http://localhost:3001/users?email=${email}`);
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
    if (Object.keys(props.user).length !== 0) {
      Fetch();
    }
  }, [props.user, slack]);

  //Boolean to keep track of log in status of current user
  let islogged = false;
  if (Object.keys(props.user).length !== 0) {
    islogged = true;
  }

  return (
    <div className="App">
      <Header logged={islogged} />
      {!islogged && <LoginButton />}
      {islogged && <p className="centerMe">Hero's Journey Progress</p>}
      {islogged && <ProgressBar email={props.user.email} />}

      <Profile slackusername={slack} addUser={props.setUser}></Profile>
      {newUser && <Prompt email={props.user.email} />}
      {islogged && (
        <LogoutButton setNewUser={setNewUser} setUser={props.setUser} />
      )}
      <Link className="panicBox" to="/panic1">
        <Button src={PanicPicture}> </Button>
      </Link>

      <NotesForm email={props.user.email}></NotesForm>
      <Resources />
    </div>
  );
}
export default Home;

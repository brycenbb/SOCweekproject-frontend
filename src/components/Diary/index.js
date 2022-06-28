import { useEffect, useState } from 'react';
import Header from '../Header';
// import Tag from '../../Assets/Tag.png';
import SimpleAccordion from '../Accordian';
import { useAuth0 } from '@auth0/auth0-react';
import NotesForm from '../NotesForm/index.js';
import Button from '@mui/material/Button';

//Bug: tags in new entries are not showing
//please
// import NotesForm from '../NotesForm/index.js';
/*Props: user{email} -> Email used to locate the users notes in the server */
function Diary() {
  const [notes, setNotes] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  /*
  SideEffect that runs on load to display all of the notes of the current logged in user 
  This component is protected from being loaded if there is no current user
  */
  useEffect(() => {
    async function Fetch() {
      let res = await fetch(`http://localhost:3001/notes?email=${user.email}`);
      let json = await res.json();
      let dataArr = json.data;
      setNotes(dataArr);
    }
    Fetch();
  }, [user.email]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <div>Not authenticated...</div>;
  }
  return (
    <>
      <Header></Header>
      <div id="entryButtonContainer">
        {isAuthenticated && (
          <Button
            className="newEntryButton"
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
            className="newEntryButton"
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
      </div>
      <SimpleAccordion arr={notes}></SimpleAccordion>
      <NotesForm></NotesForm>
    </>
  );
}

export default Diary;

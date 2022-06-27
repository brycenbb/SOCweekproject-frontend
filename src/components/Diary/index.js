import { useEffect, useState } from 'react';
import Header from '../Header';
import Tag from '../../Assets/Tag.png';
import SimpleAccordion from '../Accordian';
import { useAuth0 } from '@auth0/auth0-react';
import NotesForm from '../NotesForm/index.js';

// import NotesForm from '../NotesForm/index.js';
/*Props: user{email} -> Email used to locate the users notes in the server */
function Diary(props) {
  const [notes, setNotes] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated, isLoading);
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

  return (
    <>
      <Header></Header>
      <SimpleAccordion arr={notes}></SimpleAccordion>
      <NotesForm></NotesForm>
    </>
  );
}

export default Diary;

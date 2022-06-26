import { useEffect, useState } from 'react';
import Header from '../Header';
import Tag from '../../Assets/Tag.png';
import SimpleAccordion from '../Accordian';
// import NotesForm from '../NotesForm/index.js';
/*Props: user{email} -> Email used to locate the users notes in the server */
function Diary(props) {
  const [notes, setNotes] = useState([]);

  /*
  SideEffect that runs on load to display all of the notes of the current logged in user 
  This component is protected from being loaded if there is no current user
  */
  useEffect(() => {
    async function Fetch() {
      let res = await fetch(
        `http://localhost:3001/notes?email=${props.user.email}`
      );
      let json = await res.json();
      let dataArr = json.data;
      setNotes(dataArr);
    }
    Fetch();
  }, [props.user.email]);

  return (
    <>
      <Header></Header>
      <SimpleAccordion arr={notes}></SimpleAccordion>
      {/* <NotesForm></NotesForm> */}
    </>
  );
}

export default Diary;

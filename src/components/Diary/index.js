import { useEffect, useState } from 'react';
import Header from '../Header';
import Tag from '../../Assets/Tag.png';
import SimpleAccordion from '../Accordian';
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
      console.log(json, dataArr);
      setNotes(dataArr);
    }
    Fetch();
  }, [props.user.email]);

  return (
    <>
      <Header></Header>
      <SimpleAccordion arr={notes}></SimpleAccordion>
      {/* <main>
        <section className="notescontainer">
          {notes.map((item, index) => {
            return (
              <div className="entryBox" key={index}>
                <h3 id="day-week-diary-h3">
                  W{item.week}D{item.day}
                </h3>
                <ol className="tagList">
                  {item.tags.map((item, index) => {
                    return (
                      <li key={index}>
                        <img alt="tag" className="imageTag" src={Tag}></img>
                        {item}
                      </li>
                    );
                  })}
                </ol>
                <p className="diary-note">{item.note}</p>
              </div>
            );
          })}
        </section>
      </main> */}
    </>
  );
}

export default Diary;

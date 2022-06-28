import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tag from '../../Assets/Tag.png';

//Idea: accordian of accordians by week! DONE
//Idea: In NotesForm, change the route in the backend so that if someone
//Goes and submits a note for a week+day that they already have one, it
//appends to the end of hte note rather than makes a new one.
export default function SimpleAccordion(props) {
  let filteredArr = [];
  for (let i = 1; i <= 16; i++) {
    filteredArr.push(props.arr.filter((obj) => obj.week === i));
  }

  return (
    <main id="allNotesContainer">
      {filteredArr.map(function (itemArr, index) {
        if (itemArr.length === 0) {
          return <div key={index}> </div>;
        }
        return (
          <Accordion key={index} sx={{ border: '1px solid #181e50' }}>
            <AccordionSummary
              sx={{ borderBottom: '1px solid #181e50' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography>Week: {index + 1}</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordNoteWeek">
              <Typography>
                {itemArr.map((item, index) => {
                  return (
                    <Accordion key={index} sx={{ border: '1px solid #181e50' }}>
                      <AccordionSummary
                        sx={{ borderBottom: '1px solid #181e50' }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}a-content`}
                        id={`panel${index}a-header`}
                      >
                        <Typography>Day: {item.day}</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordNote">
                        <Typography>{item.note}</Typography>
                        <ol className="tagList">
                          {item.tags.map((item, index) => {
                            return (
                              <li key={index}>
                                <img
                                  alt="tag"
                                  className="imageTag"
                                  src={Tag}
                                ></img>
                                {item}
                              </li>
                            );
                          })}
                        </ol>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </main>
  );
}

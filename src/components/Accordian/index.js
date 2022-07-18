import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tag from '../../Assets/Tag.png';

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

        /*The sx prop in the Accordion (and other) element allows styling of the MUI elements directly in JSX */

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
            </AccordionDetails>
          </Accordion>
        );
      })}
    </main>
  );
}

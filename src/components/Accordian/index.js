import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tag from '../../Assets/Tag.png';
import { CAccordion } from '@coreui/react';
import { CAccordionHeader } from '@coreui/react';
import { CAccordionItem } from '@coreui/react';
import { CAccordionBody } from '@coreui/react';
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
      <CAccordion activeItemKey={2}>
        {filteredArr.map(function (itemArr, index) {
          if (itemArr.length === 0) {
            return;
          }
          return (
            <CAccordionItem activeItemKey={index}>
              <CAccordionHeader className="accordHeader">
                Week: {index + 1}
              </CAccordionHeader>
              <CAccordionBody className="accordNoteWeek">Hello</CAccordionBody>
            </CAccordionItem>
          );
        })}
      </CAccordion>
    </main>
  );
}

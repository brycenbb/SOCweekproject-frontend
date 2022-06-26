import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tag from '../../Assets/Tag.png';

//Idea: accordian of accordians by week!
export default function SimpleAccordion(props) {
  let filteredArr = [];
  for (let i = 1; i <= 16; i++) {
    filteredArr.push(props.arr.filter((obj) => obj.week === i));
  }
  console.log(filteredArr);

  return (
    <main id="allNotesContainer">
      {filteredArr.map((itemArr, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              sx={{ border: '1px solid #181e50' }}
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
                    <Accordion key={index}>
                      <AccordionSummary
                        sx={{ border: '1px solid #181e50' }}
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

      {/* {props.arr.map((item, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              sx={{ border: '1px solid #181e50' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography>
                Week: {item.week} Day: {item.day}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordNote">
              <Typography>{item.note}</Typography>
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
            </AccordionDetails>
          </Accordion>
        );
      })} */}
      {/* Line above this is the end of the props.arr.map {} */}
    </main>
    //THIS IS THEIR CODE BELOW
    // <div>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //     >
    //       <Typography>Accordion 1</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel2a-content"
    //       id="panel2a-header"
    //     >
    //       <Typography>Accordion 2</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion disabled>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel3a-content"
    //       id="panel3a-header"
    //     >
    //       <Typography>Disabled Accordion</Typography>
    //     </AccordionSummary>
    //   </Accordion>
    // </div>
  );
}

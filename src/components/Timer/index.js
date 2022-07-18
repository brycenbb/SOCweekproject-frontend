import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import Box from "@mui/material/Box";

/**
 *
 * @param {*} props:setVersion -> Given by PanicButton. The version updates when the button is clicked at the end of the timer
 * @returns
 */
function Timer(props) {
  const [counter, setCounter] = useState(4);
  const [btn, setbtn] = useState(false);
  const transitionBtn = useRef(false);
  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      transitionBtn.current = true;
      setbtn(true);
    }
  }, [counter]);

  //function that converts a timer into minutes and seconds with leading zeroes when needed
  function configureTimer(counter) {
    let min = Math.floor(counter / 60);
    let sec = counter - Math.floor(counter / 60) * 60;
    if (min < 10) {
      min = "0" + String(min);
    } else {
      min = String(min);
    }
    if (sec < 10) {
      sec = "0" + String(sec);
    } else {
      sec = String(sec);
    }
    return min + ":" + sec;
  }

  /*The sx prop in the elements below allows styling of the MUI elements directly in JSX */
  return (
    <div className="timer">
      <section id="timer-section">{configureTimer(counter)}</section>

      {btn && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="move-button"
        >
          <DirectionsRunIcon fontSize="large"></DirectionsRunIcon>
          <Button
            variant="contained"
            onClick={() => {
              props.setVersion(props.version + 1);
            }}
          >
            Lets move
          </Button>
        </Box>
      )}
    </div>
  );
}

export default Timer;

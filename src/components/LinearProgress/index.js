import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
/* 
  MUI component used to give a visual represnetaion of the current user's progress
   through to the last day of the bootcamp (80 total days)
*/
function LinearProgressWithLabel(props) {
  /*The sx prop in the elements below allows styling of the MUI elements directly in JSX */
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={{
            height: "auto",
            minHeight: 20,
            maxHeight: 50,
            borderRadius: "2rem",
          }}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35, fontSize: "4rem" }}>
        <Typography
          variant="body2"
          sx={{ fontSize: "2rem" }}
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel(props) {
  return (
    <Box sx={{ width: "80%" }}>
      <LinearProgressWithLabel value={props.progress} />
    </Box>
  );
}

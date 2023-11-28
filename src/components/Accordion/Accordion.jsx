import React from "react";
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const AccordionComponent = ({
  title,
  children,
  icon,
  accordionStyle,
  accordionSummaryStyle,
}) => {
  return (
    <Accordion sx={accordionStyle}>
      <AccordionSummary
        sx={accordionSummaryStyle}
        expandIcon={icon}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;

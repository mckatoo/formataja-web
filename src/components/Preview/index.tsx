import React from "react";
import useStyles from "../Styles";

function Preview() {
  const classes = useStyles;

  return <div className={classes().preview}>Preview</div>;
}

export default Preview;

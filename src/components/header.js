import React from "react";

const header = props => {
  return (
    <div>
      <p>Fancy quiz app</p>
      <p>Counter: {props.index + 1}/10</p>
      <p>Score: {props.score}/10</p>
    </div>
  );
 };

export default header;

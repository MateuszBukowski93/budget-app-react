import React, { Fragment } from "react";

const Alert = ({ alert: { type, text } }) => {
  return <div className={type}>{text}</div>;
};

export default Alert;

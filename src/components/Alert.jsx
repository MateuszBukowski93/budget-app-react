import React, { Fragment } from "react";

const Alert = ({ alert: { type, text } }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};

export default Alert;

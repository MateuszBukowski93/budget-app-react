import React from "react";
const Summary = ({ balance, incomes, outcomes}) => { 

  return (
    <div>
      incomes:{incomes}$
      Balance:{balance}$
      outcomes:{outcomes}$
    </div>
  );
};

export default Summary;

import React from "react";
const Summary = ({ balance, incomes, outcomes}) => { 

  return (
    <div className="summary">
      <span className="income margin-bottom-small">Incomes:{incomes}$</span>
      {balance > 0 && <span className="balance income margin-bottom-small">Balance:{balance}$</span>}
      {balance < 0 && <span className="balance outcome margin-bottom-small">Balance:{balance}$</span>}
      
      <span className="outcome margin-bottom-small">Outcomes:{outcomes}$</span>      
    </div>
  );
};

export default Summary;

import React from "react";
import { FaDollarSign, FaEdit } from "react-icons/fa";

const Form = ({
  amount,
  handleAmount,
  description,
  handleDescription,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-input"
            id="description"
            name="description"
            placeholder="tickets for flight"
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-input"
            id="amount"
            name="amount"
            placeholder="e.g. -300"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
        <button className="btn submit-btn">
        {edit ? "Edit" : "Submit"}
        <FaDollarSign />
      </button>
     
    </form>
  );
};

export default Form;

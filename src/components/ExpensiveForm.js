import React from "react";
import { MdSend } from "react-icons/md";
const ExpensiveForm = ({
  charge,
  amount,
  handleAmount,
  handleCharge,
  handleSubmit,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "Edit" : "submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpensiveForm;

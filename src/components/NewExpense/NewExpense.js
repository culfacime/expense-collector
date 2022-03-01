import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (prop) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={prop.onSaveExpense}></ExpenseForm>
    </div>
  );
};

export default NewExpense;

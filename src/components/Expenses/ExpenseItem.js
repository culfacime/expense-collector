import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let { date, title, amount } = props;

  const [titleState, setTitleState] = useState(title);


  const buttonClicked = () => {
    setTitleState("Merhaba");
  
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div onClick={buttonClicked} className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Car Insurance",
      amount: 256.25,
      date: new Date(2022,3, 4),
    },
    {
      id: "e2",
      title: "Market",
      amount: 223,
      date: new Date(2022, 2, 5),
    },
    {
      id: "e3",
      title: "Gas",
      amount: 56.1,
      date: new Date(2020, 1, 8),
    },
    {
      id: "e4",
      title: "Toilet Paper",
      amount: 536.1,
      date: new Date(2021, 4, 10),
    },
       {
      id: "e5",
      title: "Toilet Paper",
      amount: 536.1,
      date: new Date(2022, 4, 10),
    },
  ]);

  const addExpenseHandler = (newExpense) => {
    let max = 0;
    expenses.forEach((exp) => {
      if (exp.id > max) {
        max = exp.id;
      }
    });
    newExpense.id = max + 1;
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };

  return (
    <div>
      <React.StrictMode>
        <NewExpense onSaveExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
      </React.StrictMode>
    </div>
  );
};

export default App;

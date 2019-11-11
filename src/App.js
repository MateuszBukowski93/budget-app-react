import React, { Fragment, useEffect, useState } from "react";
import uuid from "uuid/v4";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";
import Summary from "./components/Summary";

import "./App.css";

function App() {
  //check if there is something in locale storage
  const initialState = localStorage.getItem("budgetItems")
    ? JSON.parse(localStorage.getItem("budgetItems"))
    : [];

  //Hooks
  //List
  const [budgetItems, setBudgetItems] = useState(initialState);
  //Form
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  // Summary
  const [incomes, setIncomes] = useState(0);
  const [balance, setBalance] = useState(0);
  const [outcomes, setOutcomes] = useState(0);
  //Alert
  const [alert,setAlert] = useState({show:false})
  //Locale Storage
  useEffect(() => {
    localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
  }, [budgetItems]);

  //Summary
  useEffect(() => {
    let incomes = 0;
    let balance = 0;
    let outcomes = 0;
    budgetItems.map(item => {
      balance += parseInt(item.amount);
      if (item.amount > 0) {
        incomes += parseInt(item.amount);
      } else {
        outcomes += parseInt(item.amount);
      }
      setIncomes(incomes);
      setBalance(balance);
      setOutcomes(outcomes);
    });
  });

  // changing description
  const handleDescription = e => {
    setDescription(e.target.value);
  };

  //changing amount
  const handleAmount = e => {
    setAmount(e.target.value);
  };
  //Alert
  const handleAlert = ({ type, text }) => {
    setAlert({show:true, type, text})
    setTimeout(()=>{
      setAlert({show:false})
    },3000)
  };
  //to handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (description !== "" && amount !== 0 && amount !== "") {
      let newBudgetItem = { id: uuid(), description, amount };
      setBudgetItems([...budgetItems, newBudgetItem]);
      setAmount("");
      setDescription("");
      handleAlert({type:"success", text:"Item added"})
    } else {
      handleAlert({type:"danger", text:"Description and Amount can't be empty or 0"})
    }
  };

  return (
    <div>
      {alert.show && <Alert alert={alert}/>}
      
      <Form
        handleSubmit={handleSubmit}
        handleAmount={handleAmount}
        handleDescription={handleDescription}
        amount={amount}
        description={description}
      />
      <List budgetItems={budgetItems} />
      <Summary incomes={incomes} outcomes={outcomes} balance={balance} />
    </div>
  );
}

export default App;

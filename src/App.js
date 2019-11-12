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
  //budget item
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [id, setId] = useState(0)
  // Summary
  const [incomes, setIncomes] = useState(0);
  const [balance, setBalance] = useState(0);
  const [outcomes, setOutcomes] = useState(0);
  //Alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false)
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
     
    }); 
      setIncomes(incomes);
      setBalance(balance);
      setOutcomes(outcomes);
  });

  // set description
  const handleDescription = e => {
    setDescription(e.target.value);
  };

  //set amount
  const handleAmount = e => {
    setAmount(e.target.value);
  };
  //Alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  //delete single item
  const deleteItem = id => {
    let temporaryBudgetItems = budgetItems.filter(item => {
      return item.id !== id;
    });
    setBudgetItems(temporaryBudgetItems);
    handleAlert({ type: "danger", text: "Item deleted" });
  };
  //to delete all items
  const deleteAllBudgetItems = () => {
    setBudgetItems([]);
    handleAlert({ type: "danger", text: "All items deleted" });
  };
  //edit budget item 
  const editItem = (id) => {
    setEdit(true)
    let budgetItemToEdit = budgetItems.find(item => item.id === id)
    let {description, amount } = budgetItemToEdit;
    setDescription(description)
    setAmount(amount)
    setId(id)
  }

  //to handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (description !== "" && amount !== 0 && amount !== "") {
      if(edit){
        let temporaryBudgetItems = budgetItems.map(item=>{
          return item.id === id ? {...item, description, amount} : item
        })
        setBudgetItems(temporaryBudgetItems)
        handleAlert({ type: "success", text: "Item edited" });
        setEdit(false)
      }else{
        let newBudgetItem = { id: uuid(), description, amount };
        setBudgetItems([...budgetItems, newBudgetItem]);
        handleAlert({ type: "success", text: "Item added" });
      }      
      setAmount("");
      setDescription("");
      
    } else {
      handleAlert({
        type: "danger",
        text: "Description and Amount can't be empty or 0"
      });
    }
  };

  return (
    <div>
      {alert.show && <Alert alert={alert} />}

      <Form
        handleSubmit={handleSubmit}
        handleAmount={handleAmount}
        handleDescription={handleDescription}
        amount={amount}
        description={description}
        edit={edit}
      />
      <List
        budgetItems={budgetItems}
        deleteItem={deleteItem}
        deleteAllBudgetItems={deleteAllBudgetItems}
        editItem={editItem}
      />
      <Summary incomes={incomes} outcomes={outcomes} balance={balance} />
    </div>
  );
}

export default App;

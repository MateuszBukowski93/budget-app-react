import React, { Fragment, useEffect, useState } from "react";
import uuid from "uuid/v4";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";

import "./App.css";

const initialState = [
  { id: uuid(), description: "Car", amount: -1500 },
  { id: uuid(), description: "John's salary", amount: 5000 },
  { id: uuid(), description: "Home", amount: -500 },
  { id: uuid(), description: "phone bill", amount: -50 },
  { id: uuid(), description: "phone bill", amount: -50 },
  { id: uuid(), description: "Clair's salary", amount: 4550 },
  { id: uuid(), description: "groceries", amount: -550 }
];
function App() {
  const [budgetItems, setBudgetItems] = useState(initialState);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleDescription = e => {
    console.log(e.target.value);
  };
  const handleAmount = e => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Alert />
      <Form
        handleAmount={handleAmount}
        handleDescription={handleDescription}
        amount={amount}
        description={description}
      />
      <List budgetItems={budgetItems} />
    </div>
  );
}

export default App;

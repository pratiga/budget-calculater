import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Alert from "./components/Alert";
import ExpensiveForm from "./components/ExpensiveForm";
import ExpensiveList from "./components/ExpensiveList";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 400 },
  { id: uuidv4(), charge: "credit card bill", amount: 1200 },
];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleCharge = (e) => {
    console.log(`charge ${e.target.value}`);
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    console.log(`amount: ${e.target.value}`);
    setAmount(e.target.value);
  };
  //handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "item added" });
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      setCharge("");
      setAmount("");
    } else {
      // handle alert called
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value
                    has to be bigger than zero`,
      });
    }
  };
  // clear all items
  const clearItems = () => {
    console.log("cleared all items");
    setExpenses([]);
    handleAlert({ type: "danger", text: "All items clear" });
  };

  const handleDelete = (id) => {
    let tempExpence = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpence);
    handleAlert({ type: "danger", text: "item deleted" });
  };

  const handleEdit = (id) => {
    // console.log(`item edit : ${id}`)
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1 className="title">budget calculator</h1>
      <main className="App">
        <ExpensiveForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpensiveList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItem={clearItems}
        />
      </main>
      <div className="spending">
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
      </div>
    </>
  );
}

export default App;

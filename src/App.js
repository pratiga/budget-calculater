import React,{useState} from "react";
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Alert from './components/Alert';
import ExpensiveForm from './components/ExpensiveForm';
import ExpensiveList from './components/ExpensiveList';

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600},
  { id: uuidv4(), charge: "car payment", amount:400},
  { id: uuidv4(), charge: "credit card bill", amount: 1200}
];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({show:false})
  
  const handleCharge = e => {
    console.log(`charge ${e.target.value}`);
    setCharge(e.target.value);
  };
  const handleAmount = e => {
    console.log(`char ${e.target.value}`);
    setAmount(e.target.value);
  }
  //handle alert 
  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text});
    setTimeout(()=>{
      setAlert({show:false})
    },3000)
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== "" && amount > 0){
      const singleExpense = { id: uuidv4(), charge, amount};
     setExpenses([...expenses, singleExpense]);
     setCharge("");
     setAmount(""); 
    } else {
      // handle alert called
    }
  };
  
  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text} />}
      
      <h1>budget calculator</h1>
      <main className="App">
        <ExpensiveForm 
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
       <ExpensiveList expenses={expenses}/> 
      </main>
      <h1>
        total spending : {" "}
        <span className="total">
        $
        {
          expenses.reduce((acc,curr) => {
            return (acc += parseInt(curr.amount));
          },0)
        }
        </span>
      </h1>
      
    </>
  );
}

export default App;

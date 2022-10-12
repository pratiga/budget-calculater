import React from 'react'
import {MdDelete} from "react-icons/md";
import ExpensiveItem from './ExpensiveItem'

const ExpensiveList = ({expenses,handleEdit, handleDelete,clearItem}) => {
  return (
   <>
   <ul>
    {
        expenses.map(expense => {
            return <ExpensiveItem
             key={expense.id}
             expense={expense}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            />
        })
    }
   </ul>
   {expenses.length > 0 && 
    <button className='btn'
    onClick={clearItem}
    >
    
    clear expenses
    <MdDelete className="btn-icon" />
    </button>
       
   }
   
   </>
  )
}

export default ExpensiveList

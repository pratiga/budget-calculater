import React from 'react'
import {MdDelete} from "react-icons/md";
import ExpensiveItem from './ExpensiveItem'

const ExpensiveList = ({expenses}) => {
  return (
   <>
   <ul>
    {
        expenses.map(expense => {
            return <ExpensiveItem key={expense.id} expense={expense}/>
        })
    }
   </ul>
   {expenses.length > 0 && <button className='btn'>
    clear expenses
    <MdDelete className="btn-icon" />
    </button>
       
   }
   
   </>
  )
}

export default ExpensiveList

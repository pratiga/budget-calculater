import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md';

const ExpensiveItem = ({expense}) => {
    const { id, charge, amount } = expense;
  return (
   <li className='item'>
   <div className='info'>
   <span className='expense'>{charge}</span>
   <span className='amount'>${amount}</span>
   </div>
   <button className='edit-btn' arial-label = "edit-button">
    <MdEdit />
   </button>
   <button className='clear-btn' aria-label='delete-button'>
    <MdDelete />
   </button>
   </li>
  )
}

export default ExpensiveItem

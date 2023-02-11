import React from 'react'
import ExpanseDate from './ExpanseDate';
import './ExpanseItem.css';

const ExpanseItem = (props) => {

  return (
    <div className="expense-item">
      <ExpanseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpanseItem

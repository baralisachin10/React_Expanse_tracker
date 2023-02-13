import React from 'react'
import Card from '../UI/Card';
import ExpanseDate from './ExpanseDate';
import './ExpanseItem.css';

const ExpanseItem = (props) => {

  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpanseItem

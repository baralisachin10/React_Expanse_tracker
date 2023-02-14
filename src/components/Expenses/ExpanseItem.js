import React, {useState} from 'react'
import Card from '../UI/Card';
import ExpanseDate from './ExpanseDate';
import './ExpanseItem.css';

const ExpanseItem = (props) => {

  // useState hook 
  
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpanseItem

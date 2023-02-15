import React,{useState} from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {

    // changing each states individually

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    
    // changing the states in group
    
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });


    const titleChangeHandler = (event) =>{
        // setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // });
        
        setUserInput((prevState) => {
        
        });
    }

    const amountChangeHandler = (event) =>{
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount : event.target.value
        });
    }

    const dateChangeHandler = (event) =>{
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate : event.target.value
        });
    }

  return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min='2023-01-01' max='2023-12-30' onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
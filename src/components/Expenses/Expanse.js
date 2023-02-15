import React,{useState} from 'react'
import ExpanseItem from './ExpanseItem';
import './Expanse.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expanse = (props) => {

  const [filterYear, setFilterYear] = useState('2020')

  const expenseFilterHandler = selectedYear => {
    setFilterYear(selectedYear);
  };
  return (
    <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterExpense = {expenseFilterHandler}/>
        <ExpanseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpanseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
        <ExpanseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
        <ExpanseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
    </Card>
  )
}

export default Expanse
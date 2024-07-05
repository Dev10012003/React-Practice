import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
    const [filteredYear, setNewYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        setNewYear(selectedYear);
        console.log(selectedYear);
    };

    const filteredExpenses = props.items.filter(
        expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        });

   

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
            <ExpenseChart expenses = {filteredExpenses}></ExpenseChart>
            <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card>
    )
}

export default Expenses;
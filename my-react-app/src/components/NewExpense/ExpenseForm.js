import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {
    // const [userInput, setUserInput] = useState({
    //     setTitle: '',
    //     setAmount: '',
    //     setDate: '',
    // });
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return{
    //             ...prevState,
    //             setTitle : event.target.value,
    //         };
    //     });
    // }; Another approch

    const [enteredtitle, setTitle] = useState('');
    const [enteredamount, setAmount] = useState('');
    const [entereddate, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredtitle,
            amount: enteredamount,
            date: new Date(entereddate),
        };
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setTitle('');
        setAmount(''); 
        setDate('');
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredamount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2027-01-01" value={entereddate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.closeNewExpense}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
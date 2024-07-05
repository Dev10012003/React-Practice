import React,{useState} from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense (props){
    
    const[editButton,setEditButton] = useState(false);

    const onStartHandler = (event)=>{
        setEditButton(true);
    }

    const onStopHandler = (event)=>{
        setEditButton(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData= {
            ...enteredExpenseData,
            id : Math.random.toString(),
        }
        props.onAddExpenseData(expenseData);
        console.log(expenseData);
    };

   return(
    <div className="new-expense">
        { !editButton && <button onClick={onStartHandler}>Add New Expense</button>}
        {editButton && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeNewExpense={onStopHandler}></ExpenseForm>} 
    </div>
   )
}

export default NewExpense;
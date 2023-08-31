import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'


const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) => {


        const expenseData = {
            ...enteredExpenseData,//spread operator ke help se object ko copy kr lia
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
        console.log(enteredExpenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>

        </div>
    )

}




export default NewExpense;
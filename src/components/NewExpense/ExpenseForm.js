import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

 const[enteredTitle, setEnteredTitle] = useState(''); 
 const[enteredAmount, setEnteredAmount] = useState('');
 const[enteredDate, setEnteredDate] = useState('');  

const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
};
const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
};
const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
};


const submitHandler = (event) => {
    event.preventDefault();//java script ka function h jo default behaviour ko band kr deta h so form ka default behaviour refresh wala band ho jaega

// form submit hone pe tino var ki milakar obj banega expensedata me
    const expenseData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)  //hume obbj me date string format me milega use default format me lane ke lye date function ka use kia

    }
    props.onSaveExpenseData(expenseData);

    console.log(expenseData);
// jaise hi form submit ho value ko blank kr dega
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

};

    return(
        <form onSubmit={ submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount}  onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate}  onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );


}

export default ExpenseForm;
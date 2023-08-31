import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
  // your dummy expense data...
];

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Load expenses from local storage if available
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    } else {
      // If no data in local storage, use dummy data
      setExpenses(DUMMY_EXPENSE);
    }
  }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  useEffect(() => {
    // Save expenses to local storage whenever the expenses state changes
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;

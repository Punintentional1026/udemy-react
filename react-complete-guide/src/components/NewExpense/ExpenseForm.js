import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () =>  {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEventDate] = useState('');
    const [userInput, setUserInput] = useState({
       enteredTitle: '',
       enteredAmount: '',
       enteredDate: '' 
    });

    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
    };

    const amountChangeHandler = (event) => {
        //setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
    };

    const dateChangeHandler = (event) => {
        //setEventDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        })
    };

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2023-12-31" />
            </div>
        </div>
        <div className="new-expense__action">
            <button type="submite">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;
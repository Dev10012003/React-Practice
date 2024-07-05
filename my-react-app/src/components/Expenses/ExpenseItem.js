import React, { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card.js';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem(props) {
    console.log(props);
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item_description">
                    <h2>{props.title}</h2>
                    <div className="expense-item_price">${props.amount}</div>
                </div>
            </Card>
        </li>

    )
}

export default ExpenseItem;

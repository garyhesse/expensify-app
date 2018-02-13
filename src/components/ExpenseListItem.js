// description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div className="expense">
       <p className="expense__text"><Link to={`/edit/${id}`}>{description}</Link> | {amount} | {createdAt}</p>
    </div>
);

export default ExpenseListItem;
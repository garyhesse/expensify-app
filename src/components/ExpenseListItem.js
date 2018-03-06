// description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div className="expense">
       <p className="expense__text">
       <Link to={`/edit/${id}`}>{description}</Link>
        | {numeral(amount / 100).format('$0,0.00')} 
        | {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;
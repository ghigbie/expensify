import React, { Component } from 'react';

const EditExpensePage = (props) => {
        console.log(props);
        return(
            <div>
                <h1>Edit Expense Page</h1>
                <p>{`Editing expense with id of ${props.match.params.id}`}</p>
            </div>
        );
};

export default EditExpensePage;
import React from 'react';

const Action = (props) => (
    <div>
        <button
            onClick={props.handlePickOption}
            className="btn btn-default button__choice"
            disabled={!props.hasOptions}>What should I do?</button>
    </div>
);  

export default Action;
import React from 'react';

import Option from './../Option/Option';

const Options = (props) => (
    <div>
        <button className="but btn-outline-danger button button--link"
                onClick={props.handleDeletionOption}>Remove All</button>
        
        {props.options.length === 0 && <p> Please add an option to get started! </p>}
            
        {
            props.options.map((option) => (
                <Option key={option}
                        optionText={option}
                        handleDeletionOption={props.handleDeletionOption} />))
        }
    </div>
);  

export default Options;
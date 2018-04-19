import React from 'react';

import Option from './Option/Option';

const Options = (props) => {
  return(
        <div>
            <h3>Options {props.options.length}</h3>
            {props.options.length === 0 && <p> Please add an option to get started! </p>}
            
            {
                props.options.mapp((option) => (
                    <Option key={option}
                            optionText={option}
                            handleDeletionOption={props.handleDeletionOption} />))
            }
            
            <button className="but btn-outline-danger"
                    onClick={props.handleDeletionOption}>Remove All</button>
        </div>
    );  
};

export default Options;
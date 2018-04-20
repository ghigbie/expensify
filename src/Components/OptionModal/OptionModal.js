import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLable="Selected Option">
       <h3>Selected Option</h3>    
       {props.selectedOption && <p>{props.selectedOption}</p>}
       <button className="btn btn-default" 
               onClick={props.handleClearSelectedOption}
               >Okay</button>
    </Modal>
);

export default OptionModal;
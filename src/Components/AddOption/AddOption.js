import React from 'react';

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({error: error}));
        document.getElementById('option-form').reset();
        
        if(!error){
            e.target.elements.option.value = '';
        }
        
    }
    
    render(){
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <h3 className="widget__message">Add option here!</h3>
                <form className="form add-option" 
                      id="option-form"
                      onSubmit={this.handleAddOption}>
                    <input className="add-option__input"
                           type="text" 
                           name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;


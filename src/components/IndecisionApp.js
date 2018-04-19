import React, {Component} from 'react';

class IndecisionApp extends Component{
    constructor(props){
        super(props)
        this.state = {}    
    }
    
    render(){
        return(
            <div>
                <Header 
                    title={title}
                    subtitle={subtitle} />
                    
                <Action hasOptions={this.state.options.length > 0} 
                        handlePickOption={this.handlePickOption}/>
                        
                <Options options={this.state.options} 
                         handleDeleteOptions={this.handleDeleteOptions}
                         handleDeleteOption={this.handleDeleteOption}/>
                         
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}


export default IndecisionApp;
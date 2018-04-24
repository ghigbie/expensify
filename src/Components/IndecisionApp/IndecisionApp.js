import React, {Component} from 'react';
import './IndecisionApp.scss';

import Action from './../Action/Action';
import AddOption from './../AddOption/AddOption';
import Header from './../Header/Header';
import Options from './../Options/Options';
import OptionModal from './../OptionModal/OptionModal';

class IndecisionApp extends Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Go hunting', 'Walk the dog', 'Wash the dishes', 'Find the chosen one', 'Go fishing', 'Buy lisk'],
            selectedOption: undefined
        };  
    }
    
        //this removes all options
    handleDeleteOptions(){
        this.setState(() => ({options: []}));
    }
    
    //this removes ONE option
    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            //return false to remove an item from an array, and return true to kep an item in array, in this case it I want it to be false
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }));
    }
    
    //this selects an option
    handlePickOption(){
        let random = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(() => ({selectedOption: random}));
    }
    
    handleClearSelectedOption(){
        this.setState(() => ({selectedOption: undefined}));
    }
    
    handleAddOption(option){
        if(!option){
            return 'Please enter a valid item to add';
        }else if(this.state.options.indexOf(option) > -1){ //index of returns a -1 if the option already exists
            return 'This option already exists. Please enter a valid value';
        }else{
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }
    }
    
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options: options}));
                console.log("fetching data");
            }
        }catch(e){
            
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        
        return(
            <div>
                <Header 
                    title={title}
                    subtitle={subtitle} />
                    
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} 
                            handlePickOption={this.handlePickOption}/>
                    <div className="widget">        
                        <Options options={this.state.options} 
                                 handleDeleteOptions={this.handleDeleteOptions}
                                 handleDeleteOption={this.handleDeleteOption}/>
                                 
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                
                <OptionModal selectedOption={this.state.selectedOption}
                             handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}


export default IndecisionApp;
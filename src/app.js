class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Go hunting', 'Walk the dog', 'Wash the dishes', 'Find the chosen one', 'Kill Bill', 'Go fishing', 'Buy lisk']
        };
    }
    
    //this removes all options
    handleDeleteOptions(){
        this.setState(() => ({options: []}));
    }
    
    //this removes ONE option
    handleDeleteOption(optionToRemove){
        console.log("HDO called");
        this.setState((prevState) => ({
            //return false to remove an item from an array, and return true to kep an item in array, in this case it I want it to be false
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }));
    }
    
    handlePickOption(){
        let random = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(random);
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
        console.log("Component did mount called");
    }
    
    componentDidUpdate(preProps, prevState){
        console.log("Component did update called");
    }
    
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        
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

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return(
        <div>
            <button
                onClick={props.handlePickOption}
                className="btn btn-default"
                disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );  
};

const Options = (props) => {
    return(
            <div>
                <h3>Options: {props.options.length}</h3>
                
                    {
                        props.options.map((option) => (
                            <Option key={option} 
                                    optionText={option}
                                    handleDeleteOption={props.handleDeleteOption}/>))
                    }
            
                <button className="btn btn-danger"
                        onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
    );
};

const Option = (props) => {
    return(
        <div>
            {props.optionText}  
            <button className="btn btn-default"
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                        
                    }}>Remove</button>
        </div>
    );
        
};

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
        
    }
    
    render(){
        return(
            <div>
                {this.state.error && <h3>{this.state.error}</h3>}
                <h1>Add option here!</h1>
                <form className="form"
                      id="option-form"
                      onSubmit={this.handleAddOption}>
                    <input type="text" 
                           name="option"/>
                    <button className="btn btn-default">Add Option</button>
                </form>
            </div>
        );
    }
}


const appRoot = document.getElementById('react-container');
ReactDOM.render(<IndecisionApp />, appRoot);
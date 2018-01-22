class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Go hunting', 'Walk the dog', 'Wash the dishes', 'Find the chosen one', 'Kill Bill', 'Go fishing', 'Buy lisk']
        };
    }
    
    handleDeleteOptions(){
        this.setState(() => ({options: []}));
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
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(option)
                };
            });
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
                    
                <Action hasOptions={this.state.options.length > 0} 
                        handlePickOption={this.handlePickOption}/>
                        
                <Options options={this.state.options} 
                         handleDeleteOptions={this.handleDeleteOptions}/>
                         
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

class Action extends React.Component{
    render(){
        return(
            <div>
                <button
                    onClick={this.props.handlePickOption}
                    className="btn btn-default"
                    disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <h3>Options: {this.props.options.length}</h3>
                <ol>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option}/>)
                    }
                </ol>
                <button className="btn btn-danger"
                        onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <li>{this.props.optionText}</li>
        );
    }
}



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
        
        this.setState(() => {
            return {
                error: error
            };
        });
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
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
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
                         
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}r</h2>
            </div>
        );
    }
}

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
    }
    
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        
        if(option){
            alert(option);
        }
    }
    
    render(){
        return(
            <div>
                <h1>Add option here!</h1>
                <form className="form"
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
class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Go hunting', 'Walk the dog', 'Wash the dishes', 'Find the chosen one', 'Kill Bill'];
        
        return(
            <div>
                <Header 
                    title={title}
                    subtitle={subtitle} />
                <Action />
                <Options options={options} />
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
                <button>What should I do?</button>
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
                    <Option options={this.props.options}/>
                </ol>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {
                this.props.options.map( (option) => <li key={option}>{option}</li>)
                }
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <h1>Add option here!</h1>
        );
    }
}

const appRoot = document.getElementById('react-container');
ReactDOM.render(<IndecisionApp />, appRoot);
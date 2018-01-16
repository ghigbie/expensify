class IndecisonApp extends React.Component{
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Go hunting', 'Walk the dog', 'Wash the dishes', 'Find the chosen one'];
        
        return(
            <div>
                <Header 
                    title={title}
                    subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
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
                <h3>Options: {this.options.length}</h3>
                <ol>
                    <Option />
                </ol>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <li>stuff to do</li>
                <li>stuff to do</li>
                <li>stuff to do</li>
            </div>
        );
    }
}

const appRoot = document.getElementById('react-container');
ReactDOM.render(<IndecisonApp />, appRoot);
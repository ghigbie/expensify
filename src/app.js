class IndecisonApp extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Indecison App</h1>
                <h2>Put your life in the hands of a computer</h2>
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

const appRoot = document.getElementById('react-container');
ReactDOM.render(<IndecisonApp />, appRoot);
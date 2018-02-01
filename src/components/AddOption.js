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


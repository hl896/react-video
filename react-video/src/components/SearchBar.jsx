import React from 'react'
class SearchBar extends React.Component{
    state = {term:''}
    onInputchange = event =>{
        this.setState({term:event.target.value})
    };
    onFormsubmit = event => {
        event.preventDefault();
        this.props.onFormsubmit(this.state.term);
    };
    render(){
        return(
            <div className="search-bar ui segment" >
                <form onSubmit={this.onFormsubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <br/>
                        <input 
                        placeholder='please input here' 
                        type="text" 
                        onChange={this.onInputchange}
                        value={this.state.term}
                        />
                        <p>{this.state.term}</p>
                    </div>
                    <hr/>
                </form>

            </div>
        );
    }
}

export default SearchBar;
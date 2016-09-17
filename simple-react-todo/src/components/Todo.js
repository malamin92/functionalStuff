var React = require('react');


var Todo = React.createClass({
    getInitialState: function(){
        return {complete: this.props.todo.complete}
    },
    handleClick: function() {
        this.state.complete === true ? this.setState({complete: false}) : this.setState({complete: true}); 
    },
    render: function() {
        if(this.state.complete){
            return <li onClick={this.handleClick} className="list-group-item list-group-item-success" key={this.key}>
                        <strike>{this.props.todo.task}</strike>
                    </li>;
        } else {
            return <li onClick={this.handleClick} className="list-group-item" key={this.key}>{this.props.todo.task}</li>;
        }
    }
});

module.exports = Todo;
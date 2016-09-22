var React = require('react');
var { render } = require('react-dom');

var Todo = React.createClass({
  handleClick(){
        var task = this.props.todo;
        this.props.clickHandler( task );
    },
    render: function() {
        if( this.props.todo.completed === true){
            return ( <li onClick={ this.handleClick } className="list-group-item list-group-item-success"><strike>{this.props.todo.task}</strike></li> );
        } else {
            return ( <li onClick={ this.handleClick } className="list-group-item"> {this.props.todo.task} </li> );
        }
    }
});

module.exports = Todo;

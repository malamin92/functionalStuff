var React = require('react');
var { render } = require('react-dom');

var Todo = React.createClass({
  handleClick(){
    var task = this.props.todo;
    this.props.clickHandler( task );
  },
  render: function(){
    return (
      <li 
        className={ this.props.todo.completed === true ? 
          "list-group-item list-group-item-success" : "list-group-item" }
        onClick={ this.handleClick }>
          { 
            this.props.todo.completed === true ? 
            <strike>{this.props.todo.task}</strike>
          :
            this.props.todo.task
          }
      </li>
    )
  }
});

module.exports = Todo;

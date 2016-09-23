var React = require('react');

var TodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todoInput = document.getElementById('todo-item-input');
    this.props.addTodo(todoInput.value);
    todoInput.value="";
  },
  render: function () {
    return(
      <form id='todo-form' onSubmit={ this.handleSubmit } >
        <input 
          id='todo-item-input' 
          autoComplete="off"
          className="form-control" 
          placeholder="Enter a task to your list:"
          style={{ marginTop: '10px' }}>
        </input>
      </form>
    );
  }
});

module.exports = TodoForm;

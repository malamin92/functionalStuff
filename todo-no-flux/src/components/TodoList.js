var React = require('react');
var Todo = require('./Todo');

const todos = [ {task: "Eat", completed: false},
            {task: "Breathe", completed: false},
            {task: "Sleep", completed: false}];

var TodoList = React.createClass({
    getInitialState: function() {
        return {todos: todos};
    },
    changeTodoStatus (task) {
        var updatedTodos = this.state.todos.map(function(todo){
            if (task.task === todo.task) {
                return {task: todo.task, completed: !todo.completed};
            } else {
                return todo;
            }
        });
        this.setState({todos: updatedTodos});
    },
    render: function() {
        var _that = this;
        return(
            <div className="container">
                <div className="row list-of-things">
                    <ul className="list-group">
                        {
                          this.state.todos.map( (todo, index) => {
                                return (<Todo clickHandler={ this.changeTodoStatus } key={index} todo={todo} />);
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = TodoList;

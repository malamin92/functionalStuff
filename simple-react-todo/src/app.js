var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');
require('bootstrap/dist/css/bootstrap.css');
require('./styles/todo-list.scss');

const todos = [
{ task: "Eat", complete: false},
{ task: "Sleep", complete: false},
{ task: "Study", complete: true } ];

var App = React.createClass({
    getInitialState: function(){
        return {todos};
    },
    render: function(){
        return(
            <div id="todo-list-wrapper">
                <div className="container">
                    <div className="col-xs-6 offset-xs-3">
                        <div className="row">
                            <TodoForm />
                        </div>   
                        <div className="row">
                             <TodoList todos={todos} />
                        </div>      
                     </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
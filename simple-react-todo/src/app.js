var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/TodoList')

const todos = [
{ task: "Eat", complete: false},
{ task: "Sleep", complete: false},
{ tast: "Study", complete: true } ];

var App = React.createClass({
    render: function(){
        return(
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
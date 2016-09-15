var React = require('react');
var Todo = require('./Todo')

var TodoList = React.createClass({
    render: function(){
        return(
            <ul>
                <Todo todos={this.props.todos}/>
            </ul>
        );
    }
});

module.exports = TodoList;
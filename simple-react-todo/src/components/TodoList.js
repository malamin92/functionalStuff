var React = require('react');
var Todo = require('./Todo');

var TodoList = React.createClass({
    render: function() {
        return(
            <ul className="list-group">
                {
                    this.props.todos.map((todo, index)=>{
                        return (<Todo key={index} todo={todo} />);
                    })
                }
            </ul>
        );
    }
});

module.exports = TodoList;
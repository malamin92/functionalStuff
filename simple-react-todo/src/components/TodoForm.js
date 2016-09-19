var React = require('react');

var TodoForm = React.createClass({
    handleSubmit: function(e){
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <input id="todo-item" type="text" className="form-control" placeholder="Add an Item:" />
                </div>
            </form>
        );
    }
});

module.exports = TodoForm;


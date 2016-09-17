var React = require('react');

var TodoForm = React.createClass({
    getInitialState:function(){
        return {submit: false}
    },
    handleSubmit: function(e){
        e.preventDefault();
        var value = document.getElementById('todo-item').value;
        if(this.state.submit){
            this.setState({submit: false});
        } else {
            this.setState({submit: true});
        }
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input id="todo-item" type="text" className="form-control" placeholder="Add an Item:" />
                </div>
            </form>
        );
    }
});

module.exports = TodoForm;


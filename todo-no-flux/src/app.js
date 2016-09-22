require('bootstrap/dist/css/bootstrap.min.css');
require('./styles.scss');
var React = require('react');
var { render } = require('react-dom');
var TodoList = require('./components/TodoList')

var App = React.createClass({
    render(){
        return(
            <TodoList />
            );
    }
});

render(<App/>, document.getElementById('app'));

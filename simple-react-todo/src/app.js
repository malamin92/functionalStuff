var React = require('react');
var ReactDOM = require('reactDOM');

var App = React.createClass({
    render: function(){
        return(
            <div>Hello World</div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
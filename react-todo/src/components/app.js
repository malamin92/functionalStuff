import React from 'react';
import TodosList from './todos-list';

const todos = [
    {
        tast: 'Make React Tutorial',
        isCompleted: false
    }, 
    {
        task: 'Eat Dinner',
        isCompleted: true
    }
];

export default class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Todos List</h1>
                <TodosList/>
            </div>
        );
    }
}
var React = require('react');
var TodoForm = require('./Todoform');

class App extends React.Component {
  render(){
    return(
      <div className="container text-center">
      <h1> Todo App </h1>
      <TodoForm />
      </div>
    );
  }
}

module.exports= App;

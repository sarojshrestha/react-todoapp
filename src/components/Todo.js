var React = require('react');
var TodoForm = require('./Todoform');

class Todo extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){
    return(
      <TodoForm />
    )
  }
}

module.exports = Todo;

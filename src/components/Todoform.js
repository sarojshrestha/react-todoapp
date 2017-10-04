var React = require('react');

class AppForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt) {
    debugger;
    console.log(evt);
  }

  render(){
  return (
    <div>
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" placeholder="Add new todo" />
      </form>
    </div>
  );
}
}

module.exports = AppForm;

import React from 'react';


export default class CreateToDo extends React.Component {
  constructor(props) {
    // Internal state --> Would NOT recommend! But for the purposes of this
    //   tutorial, it makes things easier. It is best to keep everthing
    //   in a global state!
    super(props);

    this.state = {
      error: null
    };
  }

  renderError() {
    if(!this.state.error) return null;
    return <div style={{ color: 'red'}}>{this.state.error}</div>;
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="what do I need to do" ref="createInput"/>
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault(); // Default is refresh page.
    // This is how we're going to grab the value!
    // console.log(this.refs.createInput.value);
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if(validateInput) {
      this.setState({ error: validateInput});
      return;
    }
    this.setState({ error: null });

    this.props.createTask(task);
    this.refs.createInput.value = "";
  }

  validateInput(task) {
    if (!task) {
      return "Please enter a task.";
    }
    else if (_.find(this.props.todos, todo => todo.task === task)) {
      return "Task already exists.";
    }
    else {
      return null;
    }
  }
}

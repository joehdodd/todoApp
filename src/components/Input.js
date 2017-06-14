import React, { Component } from 'react';

class Input extends Component {
  createItem(event) {
    event.preventDefault();
    const item = {
      task : this.task.value
    }
    this.props.addItem(item);
    this.itemForm.reset();
  }
  render() {
    return (
      <div className="container">
        <form ref={(input) => this.itemForm = input} onSubmit={(e) => this.createItem(e)}>
          <input ref={(input) => this.task = input} className="Input" type="text" placeholder="Task"/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default Input;

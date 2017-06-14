import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Items from './Items'

class App extends Component {
  constructor() {
    super();
    // bind addItem method to App component
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    // get initial state
    this.state = {
      items : {}
    };
  }

  componentWillMount() {
    // check if there is any item in localStorage
    const localStorageRef = localStorage.getItem(`item`);
    if(localStorageRef) {
      //update <App> order state
      this.setState({
        items: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`item`, JSON.stringify(nextState.items));
  }

  addItem(item) {
    // update state
    const items = {...this.state.items};
    // add in new item
    const timestamp = Date.now();
    items[`item-${timestamp}`] = item;
    // set state
    this.setState({ items });
  }

  removeItem(key) {
    const items = {...this.state.items};
    delete items[key];
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="container">
            <div>
              <h3 className="heading">Your Todo List</h3>
            </div>
          </div>
          <Input addItem={this.addItem}/>
          <ul>
            {
              Object
                .keys(this.state.items)
                .map(key => <Items key={key} index={key} details={this.state.items[key]} removeItem={this.removeItem}/>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

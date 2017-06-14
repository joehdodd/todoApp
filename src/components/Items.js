import React, { Component } from 'react';

class Items extends Component {
  render() {
    const { details, index } = this.props;
    return (
      <li className="item">
        <span className="detail">{details.task}</span>
          <div className="x-box">
            <svg viewBox="-4 0 55 35" onClick={() => this.props.removeItem(index)}>
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>
      </li>
    )
  }
}

export default Items;

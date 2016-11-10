import React, { Component } from 'react';

class Grid extends Component {
	static get propTypes() {
		return {
			elements: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
		};
	}

  render() {
    return (
    	<div className="react-grid">
      	{this.props.elements.map( (val, idx) => <div key={idx} className="grid-element">{val}</div>)}
      </div>
    );
  }
}

export default Grid;

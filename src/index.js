import Utils from './utils';
import React from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {

	// We can use static to set the default props (ES7)
	// Note that we're not doing anything with props in this example.
	static defaultProps = {
		onClickHandler: null
	}

	constructor() {
		super();

		// An example of binding in ES7
		// Equivalent to: this.findBatman.bind(this)
		this.findBatman = ::this.findBatman;

		// Equivalent to default state
		this.state = { hasBatman: false };
	}

	findBatman() {
		let batmanFound = Utils.data.filter((item) => item === 'found batman!');
		this.setState({ hasBatman: !!batmanFound });
	}

	render() {
		// A bit of ES6 destructuring
		let { hasBatman } = this.state;

		let text = hasBatman ? 'We found Batman!' : 'Where is Batman?';
		let disabled = !!(hasBatman);
		let buttonText = hasBatman ? 'He was found' : 'Find Batman!';

		return(
			<div>
				<p>{text}</p>
				<button disabled={disabled} onClick={this.findBatman}>
					{buttonText}
				</button>
			</div>);
	}
};

ReactDOM.render(<Item/>, document.getElementById('app'));




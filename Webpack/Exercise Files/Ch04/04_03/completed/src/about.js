import { Component } from 'react'
import { render } from 'react-dom'

class About extends Component {
	render() {
		return (
			<div>This is some info about our company.</div>
		)
	}
}

render(<About />, document.getElementById('react-container'))
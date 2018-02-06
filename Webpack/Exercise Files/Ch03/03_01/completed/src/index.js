import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class Message extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
			</div>
		)
	}
}

ReactDOM.render(<Message title="Email Alex" message="Can you email him?" />, 
				document.getElementById('react-container'))
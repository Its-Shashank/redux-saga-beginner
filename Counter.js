/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({
	value,
	onIncrement,
	onDecrement,
	onIncrementAsync,
	callApi
}) => (
	<div>
		<button onClick={onIncrementAsync}>Increment after 1 second</button>
		<button onClick={onIncrement}>Increment</button>{' '}
		<button onClick={onDecrement}>Decrement</button>
		<button onClick={callApi}>Call API</button>
		<hr />
		<div>Clicked: {value} times</div>
	</div>
)

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}

export default Counter

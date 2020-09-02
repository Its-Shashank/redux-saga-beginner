const INCREMENT = 'INCREMENT'
const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD'
const DECREMENT = 'DECREMENT'
const SUCCESS_RESPONSE = 'SUCCESS_RESPONSE'
const FAILED_RESPONSE = 'FAILED_RESPONSE'

export default function counter(state = 0, action) {
	switch (action.type) {
		case INCREMENT:
			return state + 1
		case INCREMENT_IF_ODD:
			return state % 2 !== 0 ? state + 1 : state
		case DECREMENT:
			return state - 1
		case SUCCESS_RESPONSE:
			console.log('SUCCESS!!!!!')
			return state
		case FAILED_RESPONSE:
			console.log('FAILED')
			return state
		default:
			return state
	}
}

export function createLesson() {
	return { type: SUCCESS_RESPONSE }
}

import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

function* helloSaga() {
	console.log('Hello sagas')
}
// the worker saga: this will perform the async increment task
function* incrementAsync() {
	// yield delay(1000)
	yield call(delay, 1000)
	yield put({ type: 'INCREMENT' })
}

// The watcher saga: spawn incrementAsync on every INCREMENT_ASYNC action.
function* watchIncrementAsync() {
	yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* createUserAsync() {
	try {
		console.log('Attempting to create a new post to jsonplaceholder.')
		const response = yield call(
			axios.get,
			'https://jsonplaceholder.typicode.com/posts'
		)
		console.log(response)
	} catch (e) {
		console.log(e)
	}
}

function* watchCreateUserAsync() {
	yield takeLatest('SUCCESS_RESPONSE', createUserAsync)
}

export default function* rootSaga() {
	yield all([ helloSaga(), watchIncrementAsync(), watchCreateUserAsync() ])
}

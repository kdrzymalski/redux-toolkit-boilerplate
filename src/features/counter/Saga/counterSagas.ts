import {all} from "@redux-saga/core/effects";
import {put, takeEvery} from 'redux-saga/effects'
import {
    increment, decrement
} from '../counterSlice'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* incrementAsyncSaga() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export function* incrementSaga() {
    yield put(increment())
}

export function* decrementSaga() {
    yield put(decrement())
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsyncSaga)
}

export function* watchIncrement() {
    yield takeEvery('INCREMENT_SAGA', incrementSaga)
}

export function* watchDecrement() {
    yield takeEvery('DECREMENT', decrementSaga)
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchIncrement(),
        watchDecrement()
    ])
}

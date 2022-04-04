import {all, } from "@redux-saga/core/effects";
import { call, takeEvery } from 'redux-saga/effects'
import getNameData from "../../../api/getNameData";

export function* getPredictionSaga(name: string) {
    yield call(getNameData, name)
}

export function* watchPrediction() {
    // @ts-ignore
    yield takeEvery('GET_PREDICTION', getPredictionSaga)
}

export default function* rootSaga() {
    yield all([
        watchPrediction()
    ])
}

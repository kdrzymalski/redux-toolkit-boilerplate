import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ageReducer from '../features/age/Saga/ageSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../features/counter/Saga/counterSagas";
import thunk from "redux-thunk";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    age: ageReducer
  },
  middleware: [thunk, sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

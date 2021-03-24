import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../redux/reducers';
import rootSaga from '../redux/sagas';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
        rootReducer,
        applyMiddleware(
                sagaMiddleware
        )
)

sagaMiddleware.run(rootSaga);

export default store;

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import clickReducer from '../reducers'

const renderWithRedux = (
    component, 
    { initialState, store = createStore(combineReducers({clickReducer}), initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{ component }</Provider>, store)
    }
}

export default renderWithRedux;
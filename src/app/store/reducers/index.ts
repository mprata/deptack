import { combineReducers } from 'redux';

import { defaultReducer } from './defaultReducer';

export default combineReducers({
    defaultData: defaultReducer
})
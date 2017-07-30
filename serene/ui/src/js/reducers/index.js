import { combineReducers } from 'redux';

import SettingsReducer from './reducer_settings';

const rootReducer = combineReducers({
    settings: SettingsReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import SettingsReducer from './reducer_settings';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
    settings: SettingsReducer,
    user: UserReducer
});

export default rootReducer;

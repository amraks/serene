import { combineReducers } from 'redux';

import SettingsReducer from './reducer_settings';
import UserReducer from './reducer_user';
import UIReducer from './reducer_ui';

const rootReducer = combineReducers({
    settings: SettingsReducer,
    user: UserReducer,
    ui : UIReducer
});

export default rootReducer;

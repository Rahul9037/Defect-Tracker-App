import { combineReducers } from 'redux';

import defectsReducer from './defects/defects.reducer';

const rootReducer = combineReducers({
    defectsReducer
})

export default rootReducer;
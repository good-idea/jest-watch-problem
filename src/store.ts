import { combineReducers, createStore } from 'redux';

import reducers from 'state/reducers';

const createRootReducer = () => {
  return combineReducers({
    ...reducers
  } as any);
};

export const store = createStore(createRootReducer());

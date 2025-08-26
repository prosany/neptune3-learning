import { combineReducers } from '@reduxjs/toolkit';
import coreReducer from '@/global/slice/coreSlice';

const rootReducer = combineReducers({
  core: coreReducer,
});

export default rootReducer;

import { configureStore } from '@reduxjs/toolkit';

import reducer from 'core/store/reducer';
import middleware, { epicMiddleware } from 'core/store/middleware';
import rootEpic from 'core/store/epic';

const store = configureStore({
	reducer,
	middleware
});

epicMiddleware.run(rootEpic);

export default store;

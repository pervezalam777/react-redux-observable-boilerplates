// External dependencies
import { configureStore } from '@reduxjs/toolkit';

// Internal dependencies
import reducer from 'core/store/root.reducer';
import middleware, { epicMiddleware } from 'core/store/epic.middleware';
import rootEpic from 'core/store/root.epic';

const store = configureStore({
	reducer,
	middleware
});

epicMiddleware.run(rootEpic);

export default store;

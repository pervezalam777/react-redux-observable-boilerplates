// External dependencies
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

export const epicMiddleware = createEpicMiddleware({
	dependencies: {
		localStorage: window.localStorage
	}
});

const middleware = [
	...getDefaultMiddleware({
		thunk: false,
		serializableCheck: {
			ignoredActions: [
				/* Action name which can not be serialized when reaching to store 
        e.g. date, file data*/
			]
		}
	}),
	epicMiddleware
];

export default middleware;

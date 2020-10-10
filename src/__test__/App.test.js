// External dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Internal dependencies
import App from 'App';

describe('Application', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
});

import React from 'react';
import { shallow } from 'enzyme';

import App from 'App';

describe('Application', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
})
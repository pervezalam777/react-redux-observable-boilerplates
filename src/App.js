import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from 'core/store/store.config';

const Title = (props) => <h1>{props.text}</h1>;
Title.propTypes = {
	text: PropTypes.string.isRequired
};

function App() {
	const [title] = useState('Boilerplate React, Redux, Redux-Observable');
	return (
		<Provider store={store}>
			<div>
				<Title text={title} />
				<span>{process.env.REACT_APP_VERSION}</span>
			</div>
		</Provider>
	);
}

export default App;

// External dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// Internal dependencies
import store from 'core/store/store.config';

/**
 * Title component renders title on screen
 * @param {object} props contains component properties
 */
function Title(props) {
	return <h1>{props.text}</h1>;
}

Title.propTypes = {
	text: PropTypes.string.isRequired
};

/**
 * App component bootstrap application UI
 */
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

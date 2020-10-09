import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Title = (props) => <h1>{props.text}</h1>;
Title.propTypes = {
	text: PropTypes.string.isRequired
};

function App() {
	const [title] = useState('Boilerplate React, Redux, Redux-Observable');
	return (
		<div>
			<Title text={title} />
			<span>{process.env.REACT_APP_VERSION}</span>
		</div>
	);
}

export default App;

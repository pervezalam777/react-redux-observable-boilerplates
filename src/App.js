import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Title = (props) => <div>{props.text}</div>;
Title.propTypes = {
	text: PropTypes.string.isRequired
};

function App() {
	const [title] = useState("Boilerplate React, Redux, Redux-Observable");
	return (
		<div>
			<Title text={title} />
		</div>
	);
}

export default App;

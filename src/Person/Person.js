import React from 'react';

const person = (props) => {
	return (
		<div>
			<p>I'm a Person and {props.name} am {props.age} uears old!</p>
			<p>{props.children}</p>
		</div>
	)
}

export default person;

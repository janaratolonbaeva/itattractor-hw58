import React from 'react';

const Button = props => {
	return (
			<button
				className={props.btnClass}
				type="button"
				onClick={props.clicked}>
				{props.children}
			</button>
	);
};

export default Button;
import React from 'react';

const Alert = ({type, children}) => {
	return (
			<div
				className={['alert', type].join(' ')}
				role="alert"
				style={{

				}}
			>
			{children}
		</div>
	);
};

export default Alert;
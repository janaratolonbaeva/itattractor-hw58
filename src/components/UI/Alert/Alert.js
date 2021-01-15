import React, {useState} from 'react';

const Alert = ({type, children, dismiss}) => {
	const [isOpen, setOpen] = useState(true);

	const classes = ['alert', 'alert-' + type];

	if (dismiss) {
		classes.push('alert-dismissible');
	}

	const closed = () => {
		setOpen(false);
		dismiss();
	}

	return isOpen && (
		<div className={classes.join(' ')}>
			{children}
			{dismiss && <button className="btn-close" onClick={closed}/>}
		</div>
	)
}

export default Alert;
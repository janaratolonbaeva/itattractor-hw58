import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import './Modal.css';

const Modal = props => {
	return (
		<>
			<Backdrop show={props.show} onClick={props.closed}/>
			<div
				className="Modal"
				tabIndex="-1"
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0'
				}}
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{props.title}</h5>
							<button type="button" className="btn-close" onClick={props.closed}/>
						</div>
						<div className="modal-body">
							<p>{props.text}</p>
						</div>
						<div className="modal-footer">
							{props.btnArr.map((btn, index) => {
								return (
									<button key={index} className={btn.type} onClick={btn.clicked}>{btn.label}</button>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
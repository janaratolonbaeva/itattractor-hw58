import React, {useState} from 'react';
import './App.css';
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";

const App = () => {
  const [show, setShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);

  const modalShow = () => {
    setShow(true);
  }

  const modalClosed = () => {
    setShow(false);
  };

  const continued = () => {
    alert('Continue');
  }

  const btnArr = [
    {type: 'btn-primary', label: 'Continue', clicked: continued},
    {type: 'btn-danger', label: 'Close', clicked: modalClosed}
  ];

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 mt-5 text-center">
              <Button btnClass="btn btn-primary" clicked={modalShow}>Open</Button>
          </div>
        <Modal
          show={show}
          closed={modalClosed}
          title="Modal title"
          text="Modal body text goes here."
          btnArr={btnArr}
        />
        </div>
      </div>
    </>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import Alert from "./components/UI/Alert/Alert";

const App = () => {
  const [show, setShow] = useState(false);

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

  const clickDismissible = () => {
    console.log('dismiss');
  }

  return (
    <>
      <Modal
        show={show}
        closed={modalClosed}
        title="Modal title"
        text="Modal body text goes here."
        btnArr={btnArr}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 mt-5 text-center">
              <Button btnClass="btn btn-primary" clicked={modalShow}>Open</Button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 mt-5">
            <Alert type="warning" dismiss={clickDismissible}>This is a warning type alert</Alert>
            <Alert type="success">This is a success type alert</Alert>
            <Alert type="secondary">This is a secondary type alert</Alert>
            <Alert type="danger">This is a danger type alert</Alert>
            <Alert type="info">This is a info type alert</Alert>
            <Alert type="light" dismiss={clickDismissible}>This is a light type alert</Alert>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

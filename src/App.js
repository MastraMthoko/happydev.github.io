import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ModalFooter, Modal, ModalBody, ModalHeader } from 'reactstrap';

//access images using   <img src={process.env.PUBLIC_URL + '/assets/image.jpg'} /> 

function App() {


  return (
    <div>
      <Button
    color="danger"
    onClick={function noRefCheck(){}}
  >
    Click Me
  </Button>
  <Modal toggle={function noRefCheck(){}}>
    <ModalHeader toggle={function noRefCheck(){}}>
      Modal title
    </ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br />
      <Button
        color="success"
        onClick={function noRefCheck(){}}
      >
        Show Nested Modal
      </Button>
      <Modal toggle={function noRefCheck(){}}>
        <ModalHeader>
          Nested Modal title
        </ModalHeader>
        <ModalBody>
          Stuff and things
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={function noRefCheck(){}}
          >
            Done
          </Button>
          {' '}
          <Button onClick={function noRefCheck(){}}>
            All Done
          </Button>
        </ModalFooter>
      </Modal>
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={function noRefCheck(){}}
      >
        Do Something
      </Button>
      {' '}
      <Button onClick={function noRefCheck(){}}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  </div>
  );
}

export default App;

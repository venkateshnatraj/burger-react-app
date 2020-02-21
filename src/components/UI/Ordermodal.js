import React, { Fragment, useContext } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { store } from '../../store/store'

const Ordermodal = ({ modal, cancel, continueNext }) => {
  const { state } = useContext(store)
  const items = Object.keys(state.ingredients).map((igkey) => (
    <p>
      {igkey} : {state.ingredients[igkey]}
    </p>
  ))
  return (
    <Fragment>
      <Modal isOpen={modal} toggle={cancel}>
        <ModalHeader toggle={cancel}>Order Summary</ModalHeader>
        <ModalBody>
          <h5>Your delicious Burger with following Ingrdients</h5>
          <ul>{items}</ul>
          <h5>Total Price : {state.total}</h5>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => continueNext()}>
            Continue
          </Button>
          <Button color="secondary" onClick={() => cancel()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default Ordermodal

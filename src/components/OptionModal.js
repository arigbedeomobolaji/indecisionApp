import React from "react"
import Modal from "react-modal"

const OptionModal = (props) => (
 <Modal
  isOpen={!!props.selectedOption}                      //This let us determine whether the modal should be open (if true) or not closed (false)
  onRequestClose={ props.handleClearSelectedOption }  //Takes a function which is fired when the user tried to close the modal
  contentLabel="Selected Options"   //Used for accessibility purposes 
  ariaHideApp={false}
  closeTimeoutMS={200}
  className="modal"
 >
  <h2 className="modal__title">Selected Options</h2>
  {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
  <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
 </Modal>
)

export default OptionModal
import React, { useState, useEffect } from "react";
import ButtonComponent from "../components/resubaleComponents/ButtonComponent";
import Modal from "react-modal";
import AddUserForm from "./AddUserForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddUser = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  /**************************
   * @DESC Pop up Handlers
   *************************/
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ButtonComponent
        buttontext="Add User"
        buttonclass="custom-button_add-user"
        onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="inner-form">
          <h5>User Information</h5>
          <AddUserForm />
          <ButtonComponent
            buttontext="Close"
            buttonclass="custom-button custom-button-close"
            onClick={closeModal}
          />
        </div>
      </Modal>
    </>
  );
};

export default AddUser;

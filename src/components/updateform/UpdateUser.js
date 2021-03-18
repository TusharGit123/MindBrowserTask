import React, { useState, useEffect } from "react";
import ButtonComponent from "../components/resubaleComponents/ButtonComponent";
import Modal from "react-modal";
import UpdateUserForm from "./UpdateUserForm";

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

const UpdateUser = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // id: new Date().getTime().toString(),

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
      <i
        className="fa fa-pencil mr-3"
        aria-hidden="true"
        // onClick={() => onEditUser(user, index)}
        onClick={openModal}
      ></i>
      {/* <ButtonComponent
        buttontext="Add User"
        buttonclass="custom-button_add-user"
        onClick={openModal}
      /> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="inner-form">
          <h5>User Information</h5>
          <UpdateUserForm />
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

export default UpdateUser;

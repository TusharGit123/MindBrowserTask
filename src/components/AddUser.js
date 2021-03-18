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

  // const [userRegistration, setUserRegistration] = useState({
  //   name: "",
  //   birthdate: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  // });
  // const [records, setRecords] = useState([]);

  /***********************************
   * @DESC Input onChange Handler
   ***********************************/
  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);

  //   setUserRegistration({
  //     ...userRegistration,
  //     [name]: value,
  //   });
  // };
  /****************************
   * @DESC onSubmit Handler
   **************************/
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newRecord = {
  //     ...userRegistration,
  //     id: new Date().getTime().toString(),
  //   };
  //   console.log(records);
  //   setRecords([...records, newRecord]);
  //   console.log(records);
  //   setUserRegistration({
  //     name: "",
  //     birthdate: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //   });
  // };

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
        // className="custom-modal"
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

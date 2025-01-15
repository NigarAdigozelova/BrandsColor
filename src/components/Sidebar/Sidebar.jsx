import React, { useState } from "react";
import "./sidebar.scss";
import Modal from "react-modal";

const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = (event) => {
    if (event?.preventDefault) {
      event.preventDefault(); // Prevent default link behavior
    }
    setModalIsOpen(!modalIsOpen);
    console.log("Salam");
  };

  return (
    <div>
      <aside className="SideBar">
        <div className="logo">
          <a href="">
            Brand<b>Colors</b>
          </a>
        </div>
        <p className="desciption">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </p>
        <div className="menu">
          <ul>
            <li>
              <a href="#" onClick={toggleModal}>
                About Brand Colors
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
        <button onClick={toggleModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      
    </div>
  );
};

export default Sidebar;

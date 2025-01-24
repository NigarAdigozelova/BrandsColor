import React, { useState } from "react";
import "./sidebar.scss";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";


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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button onClick={toggleModal} className="modal-close-btn"><IoMdClose /></button>
        <h3>About BrandColors</h3>
        <p>BrandColors was created by <b>DesignBombs</b>. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>

        <br />
        <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <b>2 million pageviews</b> . There are now over <b>600 brands</b> with <b>1600 colors</b> and the collection is always growing.</p>
      </Modal>
    </div>
  );
};

export default Sidebar;

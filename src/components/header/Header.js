import React, { useState } from "react";
import Modal from "react-modal";

import "./style.css";

import urlTelegram from "./qr-code-telegram.png";

const Header = () => {
  // const btnDownload = () => {
  //   alert("В разработке!");
  // };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const modalContent = (
    <div className="modal">
      <div className="model2">
        <h2 className="modal-h2">@markoowik.dev</h2>
        <img className="url" src={urlTelegram} alt="Link" />
        <p className="inner">𝑰 𝒂𝒎 𝑭𝒓𝒐𝒏𝒕-𝑬𝒏𝒅 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓</p>
        <button className="btnClose" onClick={closeModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
  const customStyles = {
    content: {
      top: "35%",
      left: "44%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "60%",
      transform: "translate(-40%, -10%)",
      borderRadius: "20px",
    },
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Alisher</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" className="btn" onClick={openModal}>
          Download CV
        </a>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          {modalContent}
        </Modal>
      </div>
    </header>
  );
};

export default Header;

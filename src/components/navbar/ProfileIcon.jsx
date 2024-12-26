import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./style.css";

const ProfileIcon = ({ isLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const name = localStorage.getItem("username");

  return (
    <>
      <CgProfile className="profile" onClick={openModal} />
      <div className="div">
        {showModal && (
          <div className="modalProfile">
            <div className="modalProfile_wrapper">
              <h3 className="modalProfile_title">Добро пожаловать: {name}</h3>
              <ul className="modalProfile__list">
                <div>
                  <NavLink to="/profile" className="btn-primary btn">
                    Профиль
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/news" className="btn-primary btn">
                    Новости
                  </NavLink>
                </div>
                <li className="btn btn-primary">
                  <button onClick={closeModal}>close</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileIcon;

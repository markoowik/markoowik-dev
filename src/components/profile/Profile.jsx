import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Profile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);

    return initialValue || "";
  });

  const [address, setAddress] = useState(() => {
    const saved = localStorage.getItem("address");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [opy, setOpy] = useState(() => {
    const saved = localStorage.getItem("opy");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [urlGit, setUrlGit] = useState(() => {
    const saved = localStorage.getItem("urlGit");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [urlInst, setUrlInst] = useState(() => {
    const saved = localStorage.getItem("urlInst");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [urlFB, setUrlFB] = useState(() => {
    const saved = localStorage.getItem("urlFB");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("opy", JSON.stringify(opy));
    localStorage.setItem("urlGit", JSON.stringify(urlGit));
    localStorage.setItem("urlInst", JSON.stringify(urlInst));
    localStorage.setItem("urlFB", JSON.stringify(urlFB));
    const savedIsloggedIn = localStorage.getItem("isLoggedIn");
    if (savedIsloggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    // const savedIsloggedIn1 = localStorage.getItem("isLoggedIn");
    // if (savedIsloggedIn1) {
    //   setIsLoggedIn(false);
    // }
  }, [name, address, setIsLoggedIn, opy, urlGit, urlInst, urlFB]);

  const handleLogOut = () => {
    localStorage.removeItem("currentUser");
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    setIsLoggedIn(false);
    navigate("/login");
  };
  const handleSave = () => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("opy", JSON.stringify(opy));
    localStorage.setItem("urlGit", JSON.stringify(urlGit));
    localStorage.setItem("urlInst", JSON.stringify(urlInst));
    localStorage.setItem("urlFB", JSON.stringify(urlFB));
    alert("Успешно сохранены");
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="card-body__content">
                  <div className="exit-btn">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleLogOut}
                    >
                      Выйти
                    </button>
                  </div>

                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="card-body__text">
                    <h4>{name}</h4>
                    <p className="text-secondary mb-1">{opy}</p>
                    <a href={urlGit} className="gh">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href={urlInst} className="ig">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href={urlFB} className="fb">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <div className="btns">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={openModal}
                      >
                        Редактировать профиль
                      </button>

                      {showModal && (
                        <div className="modal modalContent">
                          <p>Редактирования профиля</p>
                          <form className="w3-container" onSubmit={handleSave}>
                            <div className="input-container">
                              <label>Описания</label>
                              <input
                                className="w3-input"
                                type="text"
                                placeholder="Введите описания"
                                value={opy}
                                onChange={(event) => setOpy(event.target.value)}
                              />

                              <label>Ссылка на GitHub</label>
                              <input
                                className="w3-input"
                                type="text"
                                placeholder="GITHUB"
                                value={urlGit}
                                onChange={(event) =>
                                  setUrlGit(event.target.value)
                                }
                              />
                              <label>Ссылка на Instagram</label>
                              <input
                                className="w3-input"
                                type="text"
                                placeholder="Instagram"
                                value={urlInst}
                                onChange={(event) =>
                                  setUrlInst(event.target.value)
                                }
                              />
                              <label>Ссылка на Facebook</label>
                              <input
                                className="w3-input"
                                type="text"
                                placeholder="Facebook"
                                value={urlFB}
                                onChange={(event) =>
                                  setUrlFB(event.target.value)
                                }
                              />
                            </div>
                            <button
                              type="button"
                              className="btn btn-outline-primary btnSave"
                            >
                              Сохранить
                            </button>
                          </form>

                          <button type="button" onClick={closeModal}>
                            Close
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

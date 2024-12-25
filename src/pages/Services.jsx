import { useParams } from "react-router-dom";
import { services } from "./../helpers/servicesList";

import CloseButton from "react-bootstrap/CloseButton";

import { useState } from "react";
import axios from "axios";

const Services = () => {
  const { id } = useParams();
  const service = services[id];

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("photo", file);
      const TOKEN = "6694635250:AAExR03_oeftggu7AQEkey_UhFGv21Zu-y4";

      // Замените 'YOUR_BOT_TOKEN' на реальный токен вашего бота
      const response = await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendPhoto`,
        formData,
        {
          params: {
            chat_id: "1033246135", // Замените на ID чата
          },
        }
      );

      console.log("Фотография успешно отправлена:", response.data);
    } catch (error) {
      console.error("Ошибка при отправке фотографии:", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const TOKEN = "6694635250:AAFvyXaQK1qLAbyE8ZNUpln3JEocZJGmJQ8";
    const chatID = "1033246135";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const msg = `
            Новая заявка!
            Имя клиента: ${inputValue1};
            Названия услуга: ${service.title};
            Телефон клиента: ${inputValue2};
            img: ${file};
        `;

    try {
      const response = await fetch(URI_API, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatID,
          text: msg,
        }),
      });

      const result = await response.json();

      if (result.ok) {
        alert("Форма отправлена");
      } else {
        alert("Ошибка");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };
  // const [inputValue1, setInputValue1] = useState("");
  // const [inputValue2, setInputValue2] = useState("");
  // const [inputValue3, setInputValue3] = useState("");

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  // const handleInputChange3 = (e) => {
  //   setInputValue3(e.target.value);
  // };

  const isButtonDisabled = !inputValue1 || !inputValue2;

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <main className="section">
      <div className="container">
        <div className="service-details">
          <h1 className="title-1">{service.title}</h1>

          <img src={service.img} alt="" className="service-details__cover" />
          <div className="service__content">
            <div className="services__content-text">
              <div className="service-details__desc">
                <p>Descriptions: {service.desk}</p>
              </div>
              <div className="service-details__price">
                <p>Price: {service.price}</p>
              </div>
            </div>
            <div className="service-details__btn">
              <button onClick={openModal}>{service.ButtonOrder}</button>
            </div>
            {showModal && (
              <div className="modal">
                <button className="closeModal" onClick={closeModal}>
                  <CloseButton />
                </button>
                <div className="modal_wrapper">
                  <div className="text_content">
                    <img className="modal-img" src={service.img} alt="" />
                    {/* <div className="text__content-title">
                      <h2>Услуга: {service.title}</h2>
                    </div> */}
                  </div>
                  <div className="input__content">
                    <form onSubmit={handleSubmit}>
                      <div className="signin__login">
                        <div className="text__content-title">
                          <h2>Услуга: {service.title}</h2>
                        </div>
                        <label className="label" htmlFor="text">
                          <h1>Login:</h1>
                        </label>
                        <input
                          type="text"
                          name="text"
                          id="text"
                          value={inputValue1}
                          onChange={handleInputChange1}
                          placeholder="Введите свой логин"
                        />
                      </div>

                      <div className="signin__login">
                        <label className="label" htmlFor="number">
                          <h1>Phone:</h1>
                        </label>
                        <input
                          type="phone"
                          name="phone"
                          id="phone"
                          value={inputValue2}
                          onChange={handleInputChange2}
                          placeholder="Введите свой номер"
                        />
                      </div>
                      <div className="signin">
                        <div class="input-group mb-3">
                          <input
                            onChange={handleFileChange}
                            type="file"
                            class="form-control"
                            id="inputGroupFile02"
                          />
                          <label
                            class="input-group-text"
                            for="inputGroupFile02"
                          >
                            Upload
                          </label>
                        </div>
                      </div>
                      <div className="signin__login-btn" id="signin__login-btn">
                        <button
                          id="btn"
                          type="submit"
                          disabled={isButtonDisabled}
                          onClick={handleUpload}
                          style={{
                            transition: "opacity 0.3s ease", // Плавное изменение
                            opacity: isButtonDisabled ? 0.5 : 1, // Установка прозрачности
                          }}
                        >
                          {isButtonDisabled
                            ? "Заполните все поля"
                            : "Оставить заявку"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;

import { useState } from "react";

import "./style.css";
// import "./tg";
import Services from "../Service/Services";
import { useParams } from "react-router-dom";
import { services } from "../../helpers/servicesList";

const Signin = ({ selectedService, title }) => {
  const { id } = useParams();
  const service = services[id];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const TOKEN = "6694635250:AAFvyXaQK1qLAbyE8ZNUpln3JEocZJGmJQ8";
    const chatID = "1033246135";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const msg = `
            Новая заявка!
            Имя клиента: ${name};
            Названия услуга: ${service.title};
            Телефон клиента: ${phone};
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
  return (
    <main className="section">
      <div className="container">
        <div className="show">
          {selectedService ? (
            <div>
              <h3>{service.title}</h3>
              <p>{selectedService.description}</p>
            </div>
          ) : (
            <p>Услуга не выбрана.</p>
          )}
        </div>
        <div className="signin__inputs">
          <form onSubmit={handleSubmit}>
            <div className="signin__login">
              <label className="label" htmlFor="text">
                <h1>Login:</h1>
              </label>
              <input
                type="text"
                name="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="signin__login">
              <label className="label" htmlFor="password">
                <h1>Password:</h1>
              </label>
              <input type="password" name="password" id="text" />
            </div>

            <div className="signin__login-btn" id="signin__login-btn">
              <a href="#!">For got password?</a>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signin;

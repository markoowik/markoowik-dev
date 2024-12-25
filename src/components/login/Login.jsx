import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";

const LoginSignUp = ({ setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [message] = useState("Не правильный имя");
  const onSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(
      (user) => user.name === name && user.password === password
    );

    if (userExists) {
      console.log("Вы успешно авторизованы:", name);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      navigate("/");
    } else {
      alert("Вы ввели не правильные данные");
    }
  };
  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("name"));
    const password = JSON.parse(localStorage.getItem("password"));
    const storedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
      console.log("true");
    }

    if (username) {
      setName(username);
    }
    if (password) {
      setPassword(password);
    }
    const savedIsloggedIn = localStorage.getItem("isLoggedIn");
    if (savedIsloggedIn) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);
  useEffect(() => {
    console.log("isLogged state updated:", isLoggedIn);
  }, [isLoggedIn]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <main className="section">
        <div className="container1">
          <div className="header1">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
              <div className="input">
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="input">
                <input
                  {...register("password", { minLength: 8 })}
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <div className="box1">
                  {!errors.password && (
                    <p className="color">
                      Password must be at least 8 characters long
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="f-p">
              <span>Forgot password?</span>
            </div>
            <div className="submit-container">
              <button type="submit" className="submit blue" value="Submit">
                Login
              </button>
            </div>
            <div className="account">
              <h3 className="gray">
                У вас нет аккаунта?{" "}
                <NavLink to="/register">
                  <p className="blue2">Зарегестрироваться</p>
                </NavLink>
              </h3>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginSignUp;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(
      (user) => user.name === data.username
    );

    if (userExists) {
      setErrorMessage("Аккаунт с таким именем уже существует.");
    } else {
      existingUsers.push({ name: data.username, password: data.password });
      localStorage.setItem("users", JSON.stringify(existingUsers));
      setErrorMessage("");
      navigate("/login");
    }
  };

  return (
    <main className="section">
      <div className="container1">
        <div className="header1">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div className="input">
              <input
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only letters allowed",
                  },
                })}
                type="text"
                placeholder="Name"
              />
              <div className="box">
                {errors.username && (
                  <p className="color">{errors.username.message}</p>
                )}
              </div>
            </div>
            <div className="input">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                type="password"
                placeholder="Password"
              />
              <div className="box1">
                {errors.password && (
                  <p className="color">{errors.password.message}</p>
                )}
              </div>
            </div>
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div className="submit-container">
            <button type="submit" className="submit blue" value="Submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;

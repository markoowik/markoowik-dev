import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import Services from "./pages/Service";
import Service from "./pages/Services";
import ScrollToTop from "./utils/ScrollToTop";
import LoginSignUp from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import { useState, useEffect } from "react";
import ProfileIcon from "./components/navbar/ProfileIcon";
import ProjectTg from "./pages/ProjectTg";
import News from "./pages/News";
import NewsProj from "./pages/NewsProject";

// import Basket from "./components/basket/Basket";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedIsloggedIn = localStorage.getItem("isLoggedIn");
    if (savedIsloggedIn) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<Service />} />
          <Route
            path="/register"
            element={
              <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/tgproject/:id" element={<ProjectTg />} />
          <Route path="news" element={<News />} />
          <Route path="/newslist/:id" element={<NewsProj />} />

          <Route
            path="/login"
            element={
              <LoginSignUp
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/profileicon"
            element={
              <ProfileIcon
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

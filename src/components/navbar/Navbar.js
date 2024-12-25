import { NavLink } from "react-router-dom";

import "./style.css";
import BtnDarkmode from "../btnDarkMode/btnDarkMode";
import ProfileIcon from "./ProfileIcon";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>markoowik</strong>-dev
          </NavLink>

          <BtnDarkmode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-list_item">
              {isLoggedIn ? (
                <div className="profile">
                  <ProfileIcon />
                </div>
              ) : (
                <div className="btn-primary">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Войти
                  </NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

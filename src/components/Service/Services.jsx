import { NavLink } from "react-router-dom";

import "./style.css";

const Services = ({ index, title, img }) => {
  return (
    <NavLink to={`/service/${index}`}>
      <li className="service">
        <img src={img} alt="serivce img" className="service__img" />
        <h3 className="service__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Services;

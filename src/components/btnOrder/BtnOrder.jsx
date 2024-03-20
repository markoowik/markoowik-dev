import React, { useState } from "react";
import { services } from "../../helpers/servicesList";
import Signin from "../signin/Signin";
import { NavLink } from "react-router-dom";

const ServiceButton = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    onSelectService(service);
  };

  return (
    <div>
      <NavLink to="/signin">
        {services.map((service, index) => (
          <Signin
            key={index}
            id={index}
            title={service.title}
            onClick={() => handleServiceClick(selectedService)}
          />
        ))}
      </NavLink>
    </div>
  );
};

export default ServiceButton;

import { useParams } from "react-router-dom";
import { services } from "./../helpers/servicesList";

const Services = () => {
  const { id } = useParams();
  const service = services[id];

  const btn = () => {
    alert("В разработке!");
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
              <button onClick={btn}>{service.btnOrder}</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;

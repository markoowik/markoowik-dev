import Services from "../components/Service/Services";

import { services } from "./../helpers/servicesList";

const Service = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Services</h2>
          <ul className="services">
            {services.map((service, index) => {
              return (
                <Services
                  key={index}
                  title={service.title}
                  img={service.img}
                  index={index}

                  // ={service.desk}
                />
              );
            })}

            {/* {services.map((service, index) => {
              return (
                <Signin
                  key={index}
                  title={service.title}
                  img={service.img}
                  index={index}
                />
              );
            })} */}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Service;

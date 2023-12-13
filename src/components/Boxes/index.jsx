import { useState } from "react";
import CabeceraLink from "../CabeceraLink";
import Logout from "../Logout";
// eslint-disable-next-line react/prop-types
const BoxTitle = ({ name, title }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 mt-5">
      <div className="col m-3">
        <h5 className="fw-semibold color-primary">¡Hola {name}!</h5>
      </div>
      <div className="col mt-3">
        <h5 className="fw-semibold">{title}</h5>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const BoxSide = ({ icon, link, title }) => {
  return (
    <div className="col offset-xs-2 offset-md-0 col-md-auto">
      <div className="card card-sidebar m-3">
        <div className="card-header">
          <h5>{title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <CabeceraLink url={link}>
              <p className="me-2 link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                <i className={`bi bi-${icon}`}></i> {link}
              </p>
            </CabeceraLink>
          </li>
          <li className="list-group-item">
           {/*  <a
              href=""
              className="me-2 link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              <i className="bi bi-box-arrow-left"></i> Salir
            </a> */}
            <Logout/>
          </li>
        </ul>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const BoxSideSale = ({ links, title }) => {
  const [stores, setStores] = useState([]);

  // Función para manejar el clic en un enlace
  const handleLinkClick = async (link) => {
    try {
      // Realizar la consulta al backend con el valor de la zona (link)
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/stores?zona=${link}` ||
          `http://localhost:4000//stores?zona=${link}`
      );
      const data = await response.json();

      // Actualizar el estado con los stores obtenidos
      console.log(data.stores);
      setStores(data.stores);
    } catch (error) {
      console.error("Error al obtener los stores:", error);
    }
  };
  return (
    <div className="col offset-xs-2 offset-md-0 col-md-auto">
      <div className="card card-sidebar m-3">
        <div className="card-header">
          <h5>{title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {/*  eslint-disable-next-line react/prop-types  */}
          {links.map((link) => {
            return (
              <>
                <li className="list-group-item">
                  <p
                    className="me-2 link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                    onClick={() => handleLinkClick(link.link)}
                  >
                    <i className={`bi bi-${link.icon}`}></i> {link.link}
                  </p>
                </li>
              </>
            );
          })}

          <li className="list-group-item">
            <a
              href=""
              className="me-2 link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              <i className="bi bi-box-arrow-left"></i> Salir
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { BoxTitle, BoxSide, BoxSideSale };

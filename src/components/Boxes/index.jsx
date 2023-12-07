import CabeceraLink from "../CabeceraLink";
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
const BoxSide = ({ icon, link }) => {
    return (
      <div className="col offset-xs-2 offset-md-0 col-md-auto">
        <div className="card card-sidebar m-3">
          <div className="card-header">
            <h5>Panel Configuración</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <CabeceraLink to="profile">
                <p className="me-2 link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                  <i className={`bi bi-${icon}`}></i> {link}
                </p>
              </CabeceraLink>
            </li>
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
  
export { BoxTitle,BoxSide };

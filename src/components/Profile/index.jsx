import Cabecera from "../Cabecera";
import CabeceraLink from "../CabeceraLink";

// eslint-disable-next-line react/prop-types
export default function Profile({ name }) {
  return (
    <Cabecera>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 mt-5">
        <div className="col m-3">
          <h5 className="fw-semibold color-primary">¡Hola {name}!</h5>
        </div>
        <div className="col mt-3">
          <h5 className="fw-semibold">INFORMACIÓN PERSONAL</h5>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 mt-5">
        <div className="col col-md-auto">
          <div className="card card-sidebar m-3">
            <div className="card-header">
              <h5>Información Personal</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <CabeceraLink to="store">
                  <p className="me-2 link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                    <i className="bi bi-shop"></i> Tu negocio
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

        <div className="col col-md-8 offset-0">
          <div className="row row-cols-md-1">
            <div className="col">
              <div className="card w-75 mt-3">
                <h4 className="fw-semibold text-center pt-4">
                  Información básica
                </h4>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-3">
                  <div className="col-6 offset-3 text-center">
                    <img
                      src="./img/avatar.png"
                      className="img-fluid rounded-circle avatar"
                      alt="img-perfil"
                    />
                  </div>
                  <div className="col-6 offset-3 text-center my-4">
                    <a
                      href=""
                      className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Editar
                    </a>
                  </div>

                  <div className="card-body text-center">
                    <form className="col-8 offset-2">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control input-rounded"
                          id="nombre"
                          placeholder="Nombre y apellido"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control input-rounded"
                          id="email"
                          placeholder="email@email.com"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control input-rounded"
                          id="negocio"
                          placeholder="Tu negocio"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control input-rounded"
                          id="negocio"
                          placeholder="Teléfono/Whatsapp"
                        />
                      </div>
                      <button type="submit" className="btn button button-dark">
                        GUARDAR
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1 text-center mt-5">
              <div className="col">
                <div className="card w-75">
                  <div className="card-body">
                    <div className="card-title mb-4">
                      <h5 className="fw-semibold">Productos</h5>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                      <div className="col col-sm-6">
                        <a
                          href=""
                          className="btn button button-outline-primary"
                        >
                          Producto1
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href=""
                          className="btn button button-outline-primary"
                        >
                          Producto1
                        </a>
                      </div>
                      <div className="col">
                        <a href="" className="btn button button-primary">
                          Producto1
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href=""
                          className="btn button button-outline-primary"
                        >
                          Producto1
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href=""
                          className="btn button button-outline-primary"
                        >
                          Producto1
                        </a>
                      </div>
                      <div className="col">
                        <a href="" className="btn button button-primary">
                          Producto1
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href=""
                          className="btn button button-outline-primary"
                        >
                          Producto1
                        </a>
                      </div>
                      <div className="col">
                        <a href="" className="btn button button-primary">
                          Producto1
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1 text-center mt-5">
              <div className="col">
                <div className="card w-75">
                  <div className="card-body">
                    <div className="card-title mb-4">
                      <h5 className="fw-semibold">Cambiar contraseña</h5>
                    </div>
                    <div className="card-body">
                      <form action="" method="post">
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control input-rounded"
                            id="password"
                            placeholder="Nueva contraseña"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control input-rounded"
                            id="repeat-password"
                            placeholder="Repetir contraseña"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn button button-dark"
                        >
                          GUARDAR
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1 text-center mt-5">
              <div className="col">
                <div className="card w-75 border-danger">
                  <div className="card-body">
                    <div className="card-title mb-4">
                      <h5 className="fw-semibold">Cancelar cuenta</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eius nulla temporibus accusamus ipsam voluptas
                        dolorum asperiores harum itaque alias at?
                      </p>
                      <a
                        href="#"
                        className="link-warning link-underline-opacity-0 link-underline-opacity-100-hover float-start mt-3"
                      >
                        Eliminar cuenta
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cabecera>
  );
}

import CabeceraLink from "../CabeceraLink";
function Navegacion() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <CabeceraLink url="/">
            <span className="navbar-brand fs-4 title">AprovechAQUÍ</span>
          </CabeceraLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            
            {/* <form className="d-flex mx-4" role="search">
              <div className="input-group">
                <button className="btn" type="button" id="button-addon1">
                  <i
                    className="bi bi-search"
                    style={{ fontSize: 1.4 + "rem" }}
                  ></i>
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label="Buscar productos"
                  aria-describedby="button-addon1"
                  hidden
                />
              </div>
            </form>
            <CabeceraLink url="login">
              <span className="navbar-brand fs-6 title">INICIA SESIÓN</span>
            </CabeceraLink>
            <CabeceraLink url="register">
              <span className="navbar-brand fs-6 title-secondary">
                REGÍSTRATE
              </span>
            </CabeceraLink> */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <CabeceraLink url="comprar">
                  <span className="nav-link active fs-6 fw-semibold">
                    Encuentra descuentos
                  </span>
                </CabeceraLink>
              </li>
              <li className="nav-item">
                <CabeceraLink url="/#nosotros">
                  <span className="nav-link active fs-6 fw-semibold">
                    Sobre nosotros
                  </span>
                </CabeceraLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navegacion;

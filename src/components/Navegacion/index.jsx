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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <CabeceraLink url="comprar">
                </CabeceraLink> */}
                  <a href="#destacados" className="nav-link active fs-6 fw-semibold">
                    Encuentra descuentos
                  </a>
              </li>
              <li className="nav-item">
                {/* <CabeceraLink url="/#nosotros"> */}
                <a
                  href="#nosotros"
                  className="nav-link active fs-6 fw-semibold"
                >
                  Sobre nosotros
                </a>
                {/*   </CabeceraLink> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navegacion;

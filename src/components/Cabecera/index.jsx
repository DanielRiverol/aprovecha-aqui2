//import CabeceraLink from "../CabeceraLink";
// eslint-disable-next-line react/prop-types
function Cabecera({ children }) {
  return (
    <>
      {children}
    </>
  );
}
/* function Cabecera({ encabezado, leyenda, img }) {
  return (
    <>
      <header className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
        <div className="col">
          <h1 className="display-5 fw-semibold">{encabezado}</h1>
          <p className="mt-3 fs-5 lh-lg">{leyenda}</p>
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mt-4">
            <div className="col">
              <CabeceraLink url="comprar">
                <p className="btn button button-dark button-large mt-4">
                  QUIERO COMPRAR
                </p>
              </CabeceraLink>
            </div>
            <div className="col">
              <CabeceraLink url="comprar">
                <p className="btn button button-dark button-large mt-4">
                  QUIERO VENDER
                </p>
              </CabeceraLink>
              
            </div>
          </div>
        </div>
        <div className="col col-sm">
          <img src={img} alt="img" className="img-fluid float-end" />
        </div>
      </header>
    </>
  );
} */
export default Cabecera;

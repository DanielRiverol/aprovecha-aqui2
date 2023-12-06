import Cabecera from "../../components/Cabecera";
import CabeceraLink from "../../components/CabeceraLink";

function Inicio() {
  const data = {
    encabezado: "Únete por un Mundo Sostenible",
    leyenda: `Únete a nuestra comunidad dedicada a reducir el desperdicio
    alimentario. Transformamos la compra y venta de alimentos, generando
    impacto positivo. ¡Donde cada elección cuenta!`,
    img: "./img/Wavy Buddies Choosing Food.png",
  };
  return (
    <>
      <Cabecera>
        <header className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
          <div className="col">
            <h1 className="display-5 fw-semibold">{data.encabezado}</h1>
            <p className="mt-3 fs-5 lh-lg">{data.leyenda}</p>
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
            <img src={data.img} alt="img" className="img-fluid float-end" />
          </div>
        </header>
      </Cabecera>
    </>
  );
}

export default Inicio;

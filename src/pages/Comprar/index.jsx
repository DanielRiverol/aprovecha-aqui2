import Cabecera from "../../components/Cabecera";
import { BoxSide, BoxSideSale } from "../../components/Boxes";

function Comprar() {
  const ubicaciones = [
    {
      id: 1,
      icon: "geo",
      link: "mexico",
    },
    {
      id: 2,
      icon: "geo",
      link: "tandil",
    },
    {
      id: 3,
      icon: "geo",
      link: "CABA",
    },
    {
      id: 4,
      icon: "geo",
      link: "CABA 2",
    },
  ];
  const data = {
    encabezado: "Encuentra tu negocio más cercano",
    leyenda:
      "Descubre ofertas exclusivas y productos frescos cerca de tuyo y aprovecha las mejores opciones de compra! 🛒🌟",
  };
  return (
    <>
      <Cabecera>
        <header className="row row-cols-1 row-cols-sm-2 row-cols-md-1 header-comprar">
          <div className="col">
            <h1 className="display-5 fw-semibold">{data.encabezado}</h1>
            <p className="mt-3 fs-5 lh-lg">{data.leyenda}</p>
          </div>
        </header>
      </Cabecera>
      <BoxSideSale title="Compra por negocio" links={ubicaciones} />
    </>
  );
}
export default Comprar;

import Cabecera from "../../components/Cabecera";
import CabeceraLink from "../../components/CabeceraLink";
import TitleSection from "../../components/TitleSection";
import { CardServices, CardStep, CardDestacado } from "../../components/Card";
import { cardsData, comprar, vender, destacados } from "../../data/data.json";

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
        <header className="row row-cols-1 row-cols-sm-2 row-cols-md-2 header-inicio">
          <div className="col">
            <h1 className="display-5 fw-semibold">{data.encabezado}</h1>
            <p className="mt-3 fs-5 lh-lg">{data.leyenda}</p>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mt-4">
              <div className="col">
                <CabeceraLink url="comprar">
                  <p className="btn  button button-primary button-large mt-4">
                    QUIERO COMPRAR
                  </p>
                </CabeceraLink>
              </div>
              <div className="col">
                <CabeceraLink url="register">
                  <p className="btn button button-primary button-large mt-4">
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
      {/* Seccion Vision Mision */}
      <div className="row mt-5 py-5">
        <div className="col-6 offset-3 text-center">
          <h2 className="h2 fw-semibold">VISIÓN</h2>
          <div className="divider-sm"></div>
          <p className="text-center mt-5">
            Conectamos comercios y personas comprometidas en evitar el
            desperdicio alimentario. Nuestra misión es crear un vínculo
            efectivo, permitiendo acceder a alimentos de calidad antes de
            convertirse en desperdicio, generando un impacto positivo en la
            sociedad y el medio ambiente.
          </p>
        </div>
      </div>

      <div className="row mt-2 py-5">
        <div className="col-6 offset-3 text-center">
          <h2 className="h2 fw-semibold">MISIÓN</h2>
          <div className="divider-sm"></div>
          <p className="text-center mt-5">
            En AprovechaAQUI, visualizamos un mundo donde la conexión entre
            comercios y buscadores de soluciones contra el desperdicio
            alimentario es ágil y efectiva. Trabajamos incansablemente para
            facilitar este encuentro, asegurando que los productos a punto de
            caducar encuentren un nuevo hogar, reduciendo así el impacto
            ambiental. Únete a nosotros en esta misión de hacer del
            aprovechamiento una práctica cotidiana.
          </p>
        </div>
      </div>
      {/* seccion ventajas */}
      <div className="row text-center mt-5 py-5">
        <div className="col-12">
          <TitleSection
            title="¿Cuáles son las ventajas de AprovechAQUÍ?"
            dividerType="divider-lg"
          />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5">
            {cardsData.map((card) => {
              return (
                <CardServices
                  key={card.id}
                  title={card.title}
                  img={card.img}
                  text={card.text}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Seccion como comprar */}
      <div className="row text-center mt-5 py-5">
        <div className="col-10 offset-1">
          <TitleSection title="¿Cómo Comprar?" dividerType="divider-sm" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5">
          {comprar.map((card, index) => {
              return (
                <>
                  <CardStep key={card.id} number={card.id} text={card.text} index={index}/>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* Seccion como vender */}
      <div className="row text-center mt-5 py-5">
        <div className="col-10 offset-1">
          <TitleSection title="¿Cómo Vender?" dividerType="divider-sm" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5">
            {vender.map((card, index) => {
              return (
                <>
                  <CardStep key={card.id} number={card.id} text={card.text} index={index}/>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* Seccion destacados */}
      <div className="row text-center mt-5 py-5">
        <div className="col-10 offset-1">
          <TitleSection
            title="¿Productos destacados?"
            dividerType="divider-sm"
          />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5">
            {destacados.map((card) => {
              return (
                <CardDestacado
                  key={card.id}
                  img={card.img}
                  name={card.name}
                  text={card.text}
                  rating={card.rating}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Seccion nosotros */}
      <div className="row text-center mt-5 py-5 bg-secundario">
        <div className="col-10 offset-1">
          <h2 className="h2 fw-semibold" id="nosotros">SOBRE AprovechAQUÍ</h2>
          <div className="divider-sm"></div>
          <div className="row mt-5">
            <div className="col col-md-6 offset-md-3 offset-0">
              <p className="text-center">
                En AprovechAQUI, nos definimos como facilitadores de una
                experiencia única, donde la reducción del desperdicio
                alimentario se convierte en algo simple y gratificante.
                Conectamos a comercios comprometidos con la sostenibilidad y a
                usuarios conscientes que buscan aprovechar productos de calidad
                a punto de caducar.
              </p>
            </div>
          </div>
          <div className="row py-5 text-center">
            <div className="col">
              <button className="button-variant m-auto">
                CONTÁCTANOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;

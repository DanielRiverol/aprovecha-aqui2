import Cabecera from "../../components/Cabecera";
//import CabeceraLink from "../../components/CabeceraLink";
import TitleSection from "../../components/TitleSection";
import { CardServices, CardStep, CardDestacado } from "../../components/Card";
import { cardsData, comprar, destacados } from "../../data/data.json";

function Inicio() {
  const data = {
    encabezado: "Salva alimentos y forma parte del cambio",
    leyenda: `Únete a nuestra comunidad dedicada a reducir el desperdicio alimentario. Ahorra dinero generando impacto positivo. ¡Donde cada elección cuenta!`,
    img: "./img/Wavy Buddies Choosing Food.png",
  };
  return (
    <>
      <Cabecera>
        <header className="row row-cols-1 row-cols-md-4 row-cols-lg-12 text-center header-inicio">
          <div className="contenedor">
            <div className="col-6 offset-3 col-md-12 offset-md-0 col-lg-10 offset-lg-1 mt-5 ">
              <h1 className="display-5 fw-bold">{data.encabezado}</h1>
            </div>
            <div className="col-6 offset-2 col-md-12 offset-md-0 col-lg-12 offset-lg-2 mt-4 slogan">
              <p className="fs-5">
                Únete a nuestra comunidad dedicada a reducir el desperdicio
                alimentario.
              </p>
              <p className="fs-5">Ahorra dinero generando impacto positivo. </p>
              <p className="fs-5">¡Donde cada elección cuenta!</p>
            </div>
            <div className="col-12 w-100 mt-4">
              <a
                href="#participa"
                className="button button-dark button-large fs-5"
              >
                CONOCER MÁS
              </a>
            </div>
          </div>
        </header>
      </Cabecera>
      {/* Seccion Vision Mision */}
      <div className="main-content">
        <div className="row my-5 py-5">
          <div className="col-8 offset-2 text-center">
            <h2 className="h2 fw-semibold">NUESTRA MISIÓN</h2>
            <div className="divider-sm"></div>
            <p className="text-center lh-lg my-5 fw-bold  color-danger">
              En AprovhechaAQUÍ buscamos ponerle fin al desperdicio de alimentos
            </p>
            <p className="text-center lh-lg  mt-5">
              Entendemos la situación ambiental actual generada a raíz de la
              generación de desechos alimentarios, además de la situación
              económica que Argentina atraviesa actualmente. Por eso, queremos
              <strong> CONCIENTIZAR </strong> sobre ésta problemática que va en
              aumento y <strong>CREAR COMUNIDAD</strong>.
            </p>
            <p className="text-center lh-lg ">
              Realizamos la{" "}
              <strong>difusión de sitios web y aplicaciones móviles </strong>
              existentes en Argentina y en el mundo, que se enfocan en asegurar
              que diferentes alimentos no lleguen a la basura, sean aprovechados
              y se reduzca el impacto ambiental generado.
            </p>
            <p className="text-center lh-lg ">
              Además, queremos que todas las personas tengan acceso a alimentos
              de calidad, con el menor gasto posible y que conozcan alternativas
              accesibles para favorecer su economía.
            </p>
            <p className="text-center lh-lg my-5 fw-bold color-danger">
              ¡Hagamos del aprovechamiento de alimentos una práctica cotidiana!
            </p>
          </div>
        </div>
        <div className="row mt-2 py-5">
          <div
            className="col-6 col-sm-12  offset-3 offset-sm-0 text-center"
            id="participa"
          >
            <h2 className="h2 fw-semibold">TU PARTICIPACIÓN CUENTA</h2>
            <div className="divider-mdx"></div>
            <p className="text-center mt-5">
              Podemos cambiar la realidad y construir un mundo sin desperdicio.
              <br></br> Desde nuestro lugar podemos hacer mcuho.<br></br>{" "}
              ¡Sumate también!
            </p>
          </div>
        </div>
        <div className="row text-center mt-0 py-2">
          <div className="col-10 offset-1">
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
        <div className="row text-center my-4 py-5">
          <div className="col-10 offset-1 ">
            <TitleSection
              title="¿Cómo puedes participar?"
              dividerType="divider-mdx"
            />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5">
              {comprar.map((card, index) => {
                return (
                  <>
                    <CardStep
                      key={card.id}
                      number={card.id}
                      text={card.text}
                      index={index}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>{" "}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 text-center mt-5">
              <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-0 offset-lg-0 mt-4">
                <a href="" className="button button-dark button-medium fs-5">
                  <i
                    className="bi bi-facebook me-3"
                    style={{ fontSize: 1.4 + "rem" }}
                  ></i>
                  Facebook
                </a>
              </div>
              <div className="col col-md-6 offset-md-3  offset-lg-0 mt-4">
                <a href="" className="button button-dark button-medium fs-5">
                  <i
                    className="bi bi-instagram me-3"
                    style={{ fontSize: 1.4 + "rem" }}
                  ></i>
                  Instagram
                </a>
              </div>
            </div>
        {/* Seccion como vender */}
        {/* <div className="row text-center mt-5 py-5">
        <div className="col-10 offset-1">
          <TitleSection title="¿Cómo Vender?" dividerType="divider-sm" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5">
            {vender.map((card, index) => {
              return (
                <>
                  <CardStep
                    key={card.id}
                    number={card.id}
                    text={card.text}
                    index={index}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div> */}
        {/* Seccion destacados */}
        <div className="row text-center mt-5 py-5">
          <div className="col-10 offset-1">
            <TitleSection
              title="Recomendaciones de la semana"
              dividerType="divider-mdx"
            />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5">
              {destacados.map((card) => {
                return (
                  <>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark"
                    >
                      <CardDestacado
                        key={card.id}
                        img={card.img}
                        name={card.name}
                        text={card.text}
                        rating={card.rating}
                      />
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* Seccion nosotros */}
        <div className="row text-center mt-5 py-5 bg-secundario">
          <div className="col-10 offset-1">
            <h2 className="h2 fw-semibold" id="nosotros">
              SOBRE AprovechAQUÍ
            </h2>
            <div className="divider-mdx"></div>
            <div className="row mt-5">
              <div className="col col-md-8 offset-md-2 offset-0">
                <p className="text-center">
                  Buscamos que la reducción del desperdicio alimentario se
                  convierta en un proceso cotidiano, simple y gratificante.
                  Somos facilitadores de información y alternativas actuales e
                  innovadoras para que las personas conozcan sobre esta
                  problemática y contribuyan a la solución. Conectamos usuarios
                  conscientes con empresas y organizaciones comprometidos con la
                  sostenibilidad. Todos tenemos el mismo objetivo, ¡Queremos una
                  sociedad mejor!
                </p>
              </div>
            </div>
            {/*  <div className="row py-5 text-center">
              <div className="col">
                <button className="button-variant m-auto">CONTÁCTANOS</button>
              </div>
            </div> */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 text-center mt-5">
              <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-0 offset-lg-0 mt-4">
                <a href="" className="button button-dark button-medium fs-5">
                  <i
                    className="bi bi-facebook me-3"
                    style={{ fontSize: 1.4 + "rem" }}
                  ></i>
                  Facebook
                </a>
              </div>
              <div className="col col-md-6 offset-md-3  offset-lg-0 mt-4">
                <a href="" className="button button-dark button-medium fs-5">
                  <i
                    className="bi bi-instagram me-3"
                    style={{ fontSize: 1.4 + "rem" }}
                  ></i>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;

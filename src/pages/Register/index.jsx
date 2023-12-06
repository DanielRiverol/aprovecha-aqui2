import CabeceraLink from "../../components/CabeceraLink";

function Register() {
  return (
    <>
      <header className="row align-items-center login-register">
        <div className="col">
          <div className="card w-100">
            <div className="row text-center py-5">
              <div className="col-6 px-5">
                <h1 className="h2 fw-semibold float-start mb-5">
                  Crea tu cuenta
                </h1>
                <form method="post" action="" className="mt-5">
                  <div className="mt-4">
                    <input
                      type="text"
                      className="form-control input-rounded"
                      id="usuario"
                      placeholder="Usuario"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="email"
                      className="form-control input-rounded"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="password"
                      className="form-control input-rounded"
                      id="password"
                      placeholder="Contraseña"
                    />
                  </div>
                  <div className="mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check"
                      checked
                    />
                    <label
                      className="small form-check-label"
                      htmlFor="exampleCheck1"
                    >
                      Acepto los <a href="#">Términos y condiciones</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="button button-dark button-medium mt-4"
                  >
                    REGISTRAR
                  </button>
                  <p className="mt-3">o</p>
                </form>
                <button type="button" className="button">
                  <i className="bi bi-google"></i> Continúe con Google
                </button>
                <div className="mt-3">
                  <p className="form-text">¿Ya tiene cuenta?</p>
                  <CabeceraLink url="../login">
                    <span className="btn button button-dark button-medium mt-3">
                      INGRESAR
                    </span>
                  </CabeceraLink>
                </div>
              </div>
              <div className="col border-start px-5 ">
                <img
                  src="./img/register.png"
                  alt="img"
                  className="img-fluid mt-5"
                />
                <p className="">
                  Únete a nuestra red de comerciantes comprometidos. Regístrate
                  para dar visibilidad a tu negocio, llegar a nuevos clientes y
                  reducir desperdicios. Crear una cuenta es sencillo y te
                  ayudará a formar parte de una comunidad dedicada al
                  crecimiento mutuo. ¡Haz clic en Regístrate y comienza a
                  potenciar tu negocio hoy! 📈🛍️
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Register;

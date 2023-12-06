import CabeceraLink from "../../components/CabeceraLink";
function Login() {
  return (
    <>
      <header className="row align-items-center login-register">
        <div className="col">
          <div className="card w-100">
            <div className="row text-center py-5">
              <div className="col-6 px-5">
                <h1 className="h2 fw-semibold float-start mb-5">
                  Inicia sesión
                </h1>
                <form className="mt-5">
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
                      type="password"
                      className="form-control input-rounded"
                      id="password"
                      placeholder="Contraseña"
                    />
                    <div className="form-text mt-3">
                      ¿Olvidó su contraseña? <a href="#">Recuperar</a>
                    </div>
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
                    INGRESAR
                  </button>
                  <p className="mt-3">o</p>
                </form>
                <button type="button" className="button">
                  <i className="bi bi-google"></i> Continúe con Google
                </button>
                <div className="mt-3">
                  <p className="form-text">¿Todavía no tiene cuenta?</p>
                  <CabeceraLink url="../register">
                    <span className="btn button button-dark button-medium mt-3">
                      REGISTRAR
                    </span>
                  </CabeceraLink>
                </div>
              </div>
              <div className="col border-start px-5 ">
                <img
                  src="./img/login.png"
                  alt="img"
                  className="img-fluid mt-5"
                />
                <p className="">
                  ¡Bienvenido de nuevo! Accede a tu cuenta para gestionar tu
                  negocio, actualizar tus productos y aprovechar herramientas
                  diseñadas para potenciar tus ventas. Inicia sesión ahora y
                  descubre cómo hacer crecer tu establecimiento con nosotros.
                  🛒🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Login;

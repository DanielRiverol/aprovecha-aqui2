import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CabeceraLink from "../../components/CabeceraLink";


function Login() {
  const navigate = useNavigate(); // Cambiar a useNavigate

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreedToTerms: true, // Puedes establecer el valor inicial según tus necesidades
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login` ||
          "http://localhost:4000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        /*  const { user } = await response.json();

        const userId = user._id;
        console.log(user._id);
        // Almacenar el ID del usuario en el estado local (localStorage)
        sessionStorage.setItem("userId", userId);
        const userIdRec = sessionStorage.getItem("userId");
        console.log(userIdRec); */
        const { token, user } = await response.json();
        sessionStorage.setItem("userId", user._id);
        localStorage.setItem("token", token);
        const userIdRec = sessionStorage.getItem("userId");
        // Decodificar el token para obtener la información del usuario

        // Realizar acciones adicionales según la información del usuario

        // Autenticación exitosa, redirige a la página deseada con el ID del usuario
        navigate(`../profile/${userIdRec}`);
      } else {
        // Manejar el error de autenticación
        console.error("Error en la autenticación:", response.statusText);
        // Puedes mostrar un mensaje al usuario, por ejemplo:
        // setErrorMsg("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
    }
  };

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
                <form onSubmit={handleLogin} className="mt-5">
                  <div className="mt-4">
                    <input
                      type="email"
                      className="form-control input-rounded"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="password"
                      className="form-control input-rounded"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
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
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleInputChange}
                    />
                    <label className="small form-check-label" htmlFor="check">
                      Acepto los <a href="#">Términos y condiciones</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="button button-dark button-medium mt-4"
                  >
                    INGRESAR
                  </button>
                  {/* <p className="mt-3">o</p> */}
                </form>
                {/*  <button type="button" className="button">
                  <i className="bi bi-google"></i> Continúe con Google
                </button> */}
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

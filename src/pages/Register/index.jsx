import { useState } from "react";

import CabeceraLink from "../../components/CabeceraLink";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreedToTerms: false, // Asegúrate de inicializar el checkbox con un valor booleano (true o false)
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    agreedToTerms: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.username) {
      newErrors.username = "El nombre de usuario es obligatorio";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
      isValid = false;
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "Debes aceptar los términos y condiciones";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}` ||
          "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.status === 201) {
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
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
                  Crea tu cuenta
                </h1>
                <form onSubmit={handleRegister} className="mt-5">
                  <div className="mt-4">
                    <input
                      type="text"
                      className={`form-control input-rounded ${
                        errors.username && "is-invalid"
                      }`}
                      id="usuario"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Usuario"
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                  </div>
                  <div className="mt-4">
                    <input
                      type="email"
                      className={`form-control input-rounded ${
                        errors.email && "is-invalid"
                      }`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="mt-4">
                    <input
                      type="password"
                      className={`form-control input-rounded ${
                        errors.password && "is-invalid"
                      }`}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Contraseña"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="checkbox"
                      className={`form-check-input ${
                        errors.agreedToTerms && "is-invalid"
                      }`}
                      id="check"
                      checked={formData.agreedToTerms}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          agreedToTerms: !formData.agreedToTerms,
                        })
                      }
                    />
                    <label className="small form-check-label" htmlFor="check">
                      Acepto los <a href="#">Términos y condiciones</a>
                    </label>
                    {errors.agreedToTerms && (
                      <div className="invalid-feedback">
                        {errors.agreedToTerms}
                      </div>
                    )}
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

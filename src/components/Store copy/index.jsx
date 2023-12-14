import { useState, useEffect } from "react";
import Cabecera from "../Cabecera";
import { BoxTitle, BoxSide } from "../Boxes";

function Store() {
  const [userData, setUserData] = useState(null);
  const [newBusinessData, setNewBusinessData] = useState({
    nombreNegocio: "",
    direccion: "",
    zona: "",
    telefono: "",
    horarioAtencion: "",
  });
  const [businessData, setBusinessData] = useState(null);

  const fetchUserData = async () => {
    const userId = sessionStorage.getItem("userId");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}` ||
          `http://localhost:4000/api/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const userData = await response.json();
        setUserData(userData);

        if (userData.user.store) {
          fetchBusinessData(userData.user.store, token);
        }
      } else {
        console.error("Error al obtener la información del usuario");
      }
    } catch (error) {
      console.error("Error al obtener la información del usuario:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchBusinessData = async (businessId, token) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/stores/${businessId}` ||
          `http://localhost:4000/api/stores/${businessId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setBusinessData(data);
      } else {
        console.error("Error al obtener la información del negocio");
      }
    } catch (error) {
      console.error("Error al obtener la información del negocio:", error);
    }
  };

  const handleCreateStore = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/stores` ||
          "http://localhost:4000/api/stores",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...newBusinessData,
          }),
        }
      );

      if (response.status === 201) {
        console.log("Tienda creada exitosamente");
        // Después de crear la tienda, actualizamos la información del negocio
        fetchUserData();
      } else {
        console.error("Error al crear el comercio del Usuario");
      }
    } catch (error) {
      console.error("Error al crear el comercio del usuario:", error);
    }
  };

  return (
    <>
      {userData && (
        <Cabecera>
          <BoxTitle name={userData.user.nombre} title="Tu negocio" />
          <div className="row row-cols-1 row-cols-md-4 mt-5">
            {/* Sidebar */}
            <BoxSide icon="person-circle" link="profile" title="Enlaces" />

            {userData.user.store ? (
              <div className="col col-md-8 offset-0">
                <div className="card w-100 my-3">
                  <div className="row">
                    <div className="col-md-8 offset-2">
                      <div className="card-body text-center">
                        <h4 className="card-title fw-semibold my-5">
                          Información del negocio
                        </h4>
                        <img
                          src="../img/store-default.png"
                          alt={"Imagen " + businessData.nombreNegocio}
                          className="img-fluid rounded-circle avatar"
                        />
                        {/* Renderizar la información del negocio */}
                        {businessData ? (
                          <>
                            <div className="my-3">
                              <label
                                htmlFor="nombreNegocio"
                                className="fw-bold"
                              >
                                Nombre del negocio:
                              </label>
                              <span className="ms-1">
                                {businessData.nombreNegocio}
                              </span>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="direccion" className="fw-bold">
                                Dirección:
                              </label>
                              <span className="ms-1">
                                {businessData.direccion}
                              </span>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="telefono" className="fw-bold">
                                Teléfono/Whatsapp:
                              </label>
                              <span className="ms-1">
                                {businessData.telefono}
                              </span>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="zona" className="fw-bold">
                                Barrio:
                              </label>
                              <span className="ms-1">{businessData.zona}</span>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="horario" className="fw-bold">
                                Horario de Atención:
                              </label>
                              <span className="ms-1">
                                {businessData.horarioAtencion}
                              </span>
                            </div>
                          </>
                        ) : (
                          <p>Cargando información del negocio...</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col col-md-8 offset-0">
                <div className="card w-100 my-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 offset-md-2 offset-sm-0 ">
                      <form onSubmit={handleCreateStore}>
                        <div className="card-body text-center">
                          <h4 className="card-title fw-semibold my-5">
                            Crear negocio
                          </h4>
                          <img
                            src="../img/store-default.png"
                            alt="imagen"
                            className="img-fluid rounded-circle avatar"
                          />
                          {/* Resto del formulario de creación del negocio */}
                          <div className="my-3">
                            <label htmlFor="nombreNegocio">
                              Nombre del negocio:
                            </label>
                            <input
                              type="text"
                              id="nombreNegocio"
                              className="form-control"
                              value={newBusinessData.nombreNegocio}
                              placeholder="Almacén Aprovecha"
                              onChange={(e) =>
                                setNewBusinessData({
                                  ...newBusinessData,
                                  nombreNegocio: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="direccion">Dirección:</label>
                            <input
                              type="text"
                              id="direccion"
                              className="form-control"
                              placeholder="Calle 1234"
                              value={newBusinessData.direccion}
                              onChange={(e) =>
                                setNewBusinessData({
                                  ...newBusinessData,
                                  direccion: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="telefono">Teléfono/Whatsapp:</label>
                            <input
                              type="tel"
                              id="telefono"
                              className="form-control"
                              placeholder="11 23423432"
                              value={newBusinessData.telefono}
                              onChange={(e) =>
                                setNewBusinessData({
                                  ...newBusinessData,
                                  telefono: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="zona">Barrio:</label>
                            <input
                              type="text"
                              id="zona"
                              className="form-control"
                              placeholder="Barrio"
                              value={newBusinessData.zona}
                              onChange={(e) =>
                                setNewBusinessData({
                                  ...newBusinessData,
                                  zona: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="horario">
                              Horario de Atención:
                            </label>
                            <input
                              type="text"
                              id="horario"
                              className="form-control"
                              placeholder="Lunes a Sábados de 8 a 16"
                              value={newBusinessData.horarioAtencion}
                              onChange={(e) =>
                                setNewBusinessData({
                                  ...newBusinessData,
                                  horarioAtencion: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="mt-3">
                            <button
                              type="submit"
                              className="button button-dark"
                            >
                              Guardar negocio
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Productos */}
                <div className="row row-cols-1 row-cols-md-4 mt-5">
                  <div className="col col-md-12 offset-0 mb-5">
                    <div className="card w-100 mt-3">
                      <h4 className="fw-semibold text-center pt-4">
                        Selecciona productos que vendes
                      </h4>
                      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-3">
                        <div className="card-body text-center">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore cumque vitae necessitatibus. Tenetur, repudiandae officia quisquam tempore est, culpa odio molestias reiciendis esse reprehenderit maxime minima sunt iste dolor?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* fin Productos */}
                {/* Bolsas */}
                <div className="row row-cols-1 row-cols-md-4 mt-5">
                  <div className="col col-md-12 offset-0 mb-5">
                    <div className="card w-100 mt-3">
                      <h4 className="fw-semibold text-center pt-4">
                        Selecciona el tipo de bolsa
                      </h4>
                      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-3">
                        <div className="card-body text-center">
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sunt ipsam perferendis harum a praesentium itaque error id nesciunt, dolore, eligendi iusto ad, reprehenderit culpa alias. Saepe facilis hic quidem?
                          </p>
                          <a
                            href=""
                            className="fw-semibold link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                          >
                            Quiero eliminar mi cuenta
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* fin bolsas */}
              </div>
            )}
          </div>
        </Cabecera>
      )}
    </>
  );
}

export default Store;

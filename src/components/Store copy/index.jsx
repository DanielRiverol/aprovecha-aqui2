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
        `${import.meta.env.VITE_BACKEND_URL}/users/${userId}` ||
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
        `${import.meta.env.VITE_BACKEND_URL}/stores/${businessId}` ||
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
        `${import.meta.env.VITE_BACKEND_URL}/stores` ||
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
                        {/* Renderizar la información del negocio */}
                        {businessData ? (
                          <>
                            <div className="mb-3">
                              <label htmlFor="nombreNegocio">
                                Nombre del negocio:
                              </label>
                              <span className="fw-bold">
                                {businessData.nombreNegocio}
                              </span>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="direccion">Dirección:</label>
                              <span>{businessData.direccion}</span>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="telefono">
                                Teléfono/Whatsapp:
                              </label>
                              <span>{businessData.telefono}</span>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="zona">Barrio:</label>
                              <span>{businessData.zona}</span>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="horario">
                                Horario de Atención:
                              </label>
                              <span>{businessData.horarioAtencion}</span>
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
                    <div className="col-md-8 offset-2">
                      <form onSubmit={handleCreateStore}>
                        <div className="card-body text-center">
                          <h4 className="card-title fw-semibold my-5">
                            Crear negocio
                          </h4>
                          {/* Resto del formulario de creación del negocio */}
                          <div className="mb-3">
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
              </div>
            
          )}
          </div>
        </Cabecera>
      )}
    </>
  );
}

export default Store;

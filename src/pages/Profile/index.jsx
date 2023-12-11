import { useState, useEffect } from "react";
import UserProfile from "../../components/Profile";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [userStore, setUserStore] = useState(null);
  const [showCreateBusinessForm, setShowCreateBusinessForm] = useState(false);
  const [newBusinessData, setNewBusinessData] = useState({
    name: "",
    address: "",
    phone: "",
    horario: "",
    img: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = sessionStorage.getItem("userId");

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/user/${userId}`
        );
        if (response.status === 200) {
          const userData = await response.json();
          setUserData(userData);
        } else {
          console.error("Error al obtener la información del usuario");
        }
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
      }
    };

    const fetchUserStore = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/stores`
        );
        if (response.status === 200) {
          const userStoreData = await response.json();
          setUserStore(userStoreData);
        } else {
          console.error(
            "Error al obtener la información del comercio del usuario"
          );
        }
      } catch (error) {
        console.error(
          "Error al obtener la información del comercio del usuario:",
          error
        );
      }
    };

    fetchUserData();
    fetchUserStore();
  }, []);

  const handleCreateStore = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/stores`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...newBusinessData,
            user: userData._id,
          }),
        }
      );

      if (response.status === 201) {
        const newStoreData = await response.json();
        setUserStore(newStoreData);
        setShowCreateBusinessForm(false); // Ocultar el formulario después de guardar
      } else {
        console.error("Error al crear el comercio del usuario");
      }
    } catch (error) {
      console.error("Error al crear el comercio del usuario:", error);
    }
  };

  const handleEditStore = () => {
    // Cargar los datos del store en el formulario al presionar el botón de editar
    setNewBusinessData({
      name: userStore.name || "",
      address: userStore.address || "",
      phone: userStore.phone || "",
      horario: userStore.horario || "",
      img: userStore.img || "",
    });
    setShowCreateBusinessForm(true);
  };

  return (
    <>
      {userData && (
        <>
          <UserProfile name={userData.username} email={userData.email} />
          <div className="row row-cols-1 row-cols-md-4 mt-5">
            {!userStore && (
              <div className="col col-md-4 offset-6">
                {!showCreateBusinessForm && (
                  <button
                    className="button button-dark"
                    onClick={() => setShowCreateBusinessForm(true)}
                  >
                    Crea tu negocio
                  </button>
                )}
              </div>
            )}

            <div className="col col-md-8 offset-3">
              <div className="card w-100 mt-3">
                {showCreateBusinessForm && (
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <label htmlFor="name">Nombre del negocio:</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={newBusinessData.name}
                        onChange={(e) =>
                          setNewBusinessData({
                            ...newBusinessData,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address">Dirección:</label>
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                        value={newBusinessData.address}
                        onChange={(e) =>
                          setNewBusinessData({
                            ...newBusinessData,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone">Teléfono:</label>
                      <input
                        type="text"
                        id="phone"
                        className="form-control"
                        value={newBusinessData.phone}
                        onChange={(e) =>
                          setNewBusinessData({
                            ...newBusinessData,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="horario">Horario:</label>
                      <input
                        type="text"
                        id="horario"
                        className="form-control"
                        value={newBusinessData.horario}
                        onChange={(e) =>
                          setNewBusinessData({
                            ...newBusinessData,
                            horario: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="img">URL de la imagen:</label>
                      <input
                        type="text"
                        id="img"
                        className="form-control"
                        value={newBusinessData.img}
                        onChange={(e) =>
                          setNewBusinessData({
                            ...newBusinessData,
                            img: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="mt-3">
                      <button
                        className="button button-dark"
                        onClick={handleCreateStore}
                      >
                        Guardar negocio
                      </button>
                    </div>
                  </div>
                )}

                {userStore && (
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <label htmlFor="name">Nombre del negocio:</label>
                      <span className="fw-bold">{userStore.name}</span>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address">Dirección:</label>
                      <span>{userStore.address}</span>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone">Teléfono:</label>
                      <span>{userStore.phone}</span>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="horario">Horario:</label>
                      <span>{userStore.horario}</span>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="img">URL de la imagen:</label>
                      <span>{userStore.img}</span>
                    </div>

                    <div className="mt-3">
                      <button
                        className="button button-dark"
                        onClick={handleEditStore}
                      >
                        Editar negocio
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;

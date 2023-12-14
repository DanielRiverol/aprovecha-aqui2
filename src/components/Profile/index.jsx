import { useState } from "react";
import Cabecera from "../Cabecera";
import { BoxTitle, BoxSide } from "../Boxes";
// eslint-disable-next-line react/prop-types
function Profile({ name, email, imagen = "../img/store-default.png" }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Estado para manejar la información del usuario en el formulario
  const [editedUserData, setEditedUserData] = useState({
    newName: name,
    newEmail: email,
    // Agrega más campos según sea necesario
  });
  const handleChangePassword = async (e) => {
    e.preventDefault();

    const userId = sessionStorage.getItem("userId");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/change-password` ||
          `http://localhost:4000/api/users/change-password`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            oldPassword,
            newPassword,
          }),
        }
      );

      if (response.status === 200) {
        // Contraseña cambiada exitosamente
        console.log("Contraseña cambiada exitosamente");
      } else {
        const data = await response.json();
        console.error("Error al cambiar la contraseña:", data.error);
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
    }

    // Limpiar los campos después de cambiar la contraseña
    setOldPassword("");
    setNewPassword("");
  };
  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    const userId = sessionStorage.getItem("userId");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}` ||
          `http://localhost:4000/api/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Cuenta eliminada exitosamente
        console.log("Cuenta eliminada exitosamente");

        // Limpiar el almacenamiento local
        localStorage.removeItem("token");
        sessionStorage.clear(); // Opcional: Puedes elegir limpiar también sessionStorage si es necesario

        // Redireccionar a la página de inicio
        window.location.href = "/"; // Cambia "/" por la ruta correcta de tu página de inicio
      } else {
        const data = await response.json();
        console.error("Error al eliminar la cuenta:", data.error);
      }
    } catch (error) {
      console.error("Error al eliminar la cuenta:", error);
    }
  };
  const handleCancelEdit = () => {
    // Ocultar el formulario de edición al cancelar
    setIsEditing(false);
  };
  const handleEditInformation = () => {
    // Mostrar el formulario de edición al presionar el botón
    setIsEditing(true);
  };
  const handleSaveEdit = async (e) => {
    e.preventDefault();

    const userId = sessionStorage.getItem("userId");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}` ||
          `http://localhost:4000/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: editedUserData.newName,
            email: editedUserData.newEmail,
            // Agrega más campos según sea necesario
          }),
        }
      );

      if (response.status === 200) {
        // Información actualizada exitosamente
        console.log("Información actualizada exitosamente");

        // Recargar la página después de guardar
        window.location.reload();
      } else {
        const data = await response.json();
        console.error("Error al actualizar la información:", data.error);
        // Puedes manejar el error de acuerdo a tus necesidades
      }
    } catch (error) {
      console.error("Error al actualizar la información:", error);
      // Puedes manejar el error de acuerdo a tus necesidades
    }
  };
  return (
    <Cabecera>
      {/* Title */}
      <BoxTitle name={name} title="Tu perfil" />
      <div className="row row-cols-1 row-cols-md-4 mt-5">
        {/* Sidebar */}
        <BoxSide icon="person-circle" link="comercio" title="Enlaces" />

        <div className="col col-md-8 offset-0 mb-5">
          <div className="card w-100 mt-3">
            <h4 className="fw-semibold text-center pt-4">Información básica</h4>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-3">
              <div className="card-body text-center">
                <img
                  src={imagen}
                  alt="imagen de perfil"
                  className="img-fluid rounded-circle avatar"
                />
                {!isEditing ? (
                  // Mostrar la información del usuario
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h6 className="fw-semibold">Nombre de usuario:</h6>
                      <span className="small">{name}</span>
                    </li>
                    <li className="list-group-item">
                      <h6 className="fw-semibold">Email:</h6>
                      <span className="small">{email}</span>
                    </li>
                  </ul>
                ) : (
                  // Mostrar el formulario de edición
                  <form
                    onSubmit={handleSaveEdit}
                    className="col col-md-8 offset-sm-0 offset-md-2"
                  >
                    <div className="mb-3">
                      <label htmlFor="newName">Nuevo nombre:</label>
                      <input
                        type="text"
                        id="newName"
                        className="form-control"
                        value={editedUserData.newName}
                        onChange={(e) =>
                          setEditedUserData({
                            ...editedUserData,
                            newName: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="newEmail">Nuevo email:</label>
                      <input
                        type="email"
                        id="newEmail"
                        className="form-control"
                        value={editedUserData.newEmail}
                        onChange={(e) =>
                          setEditedUserData({
                            ...editedUserData,
                            newEmail: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Agrega más campos según sea necesario */}

                    <div className="mt-3">
                      <button type="submit" className="button button-dark my-2">
                        Guardar cambios
                      </button>
                      <button
                        type="button"
                        className="button button-outline-dark  my-2"
                        onClick={handleCancelEdit}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}

                {!isEditing && (
                  <button
                    className="button button-dark mt-3"
                    onClick={handleEditInformation}
                  >
                    Editar información
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Cambiar contraseña */}
          <div className="row row-cols-1 row-cols-md-4 mt-5">
            <div className="col col-md-12 offset-0  mb-5">
              <div className="card w-100 mt-3">
                <h4 className="fw-semibold text-center pt-4">
                  Cambiar contraseña
                </h4>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-3">
                  <div className="card-body text-center">
                    <form
                      onSubmit={handleChangePassword}
                      className="col col-md-8  offset-sm-0 offset-md-2"
                    >
                      <div className="mb-3">
                        <label htmlFor="oldPassword">Contraseña actual:</label>
                        <input
                          type="password"
                          id="oldPassword"
                          className="form-control"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="newPassword">Nueva contraseña:</label>
                        <input
                          type="password"
                          id="newPassword"
                          className="form-control"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>

                      <div className="mt-3">
                        <button type="submit" className="button button-dark">
                          Cambiar contraseña
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fin cambiar contraseña */}
          {/* Eliminar cuenta */}
          <div className="row row-cols-1 row-cols-md-4 mt-5">
            <div className="col col-md-12 offset-0 mb-5">
              <div className="card w-100 mt-3">
                <h4 className="fw-semibold text-center pt-4">
                  Eliminar cuenta
                </h4>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-3">
                  <div className="card-body text-center">
                    <p>
                      ¿Seguro quieres eliminar tu cuenta de AporvechaAquí? Al
                      eliminar la cuenta, toda tu información, tus comercios y
                      los datos asociados a tu cuenta se eliminarán. Esta acción
                      no se puede deshacer.
                    </p>
                    <a
                      href=""
                      className="fw-semibold link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                      onClick={() => handleDeleteAccount()}
                    >
                      Quiero eliminar mi cuenta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fin eliminar cuenta */}
        </div>
      </div>
    </Cabecera>
  );
}

export default Profile;

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Cabecera from "../Cabecera";
import { BoxTitle, BoxSide } from "../Boxes";

export default function Comercio({
  name,
  address,
  phone,
  horario,
  img,
  token,
}) {
  const [comercioData, setComercioData] = useState({
    nombre: name,
    direccion: address,
    telefono: phone,
    horario: horario,
    imagen: img,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nombre: name,
    email: "",
    horario: horario,
    telefono: phone,
    imagen: null,
  });

  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    // Cambia la URL a la de tu servidor y la ruta correcta
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/stores` ||
        "http://localhost:5000/stores",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Actualiza el estado del componente con los datos recibidos
        setComercioData(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del comercio:", error);
      });
  }, [token]); // Se ejecutará solo una vez cuando el componente se monte

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // Manejar la carga de archivos para la imagen
    if (type === "file") {
      const file = e.target.files[0];
      setFormData({ ...formData, [name]: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();

    // Cambia la URL a la de tu servidor y la ruta correcta para la creación
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/stores` ||
        "http://localhost:5000/stores",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Actualiza el estado del componente con los datos creados
        setComercioData(data);
        // Desactiva la creación después de guardar
        setIsCreating(false);
      })
      .catch((error) => {
        console.error("Error al crear comercio:", error);
      });
  };
  const toggleEdit = () => {
    if (isEditing || isCreating) {
      // Si está en modo edición o creación, cancela
      setIsEditing(false);
      setIsCreating(false);
      setFormData({
        nombre: comercioData.nombre,
        email: "",
        horario: comercioData.horario,
        telefono: comercioData.telefono,
        imagen: null,
      });
    } else {
      // Si no está en modo edición ni creación, inicia la edición
      setIsEditing(true);
      setFormData({
        nombre: comercioData.nombre,
        email: "",
        horario: comercioData.horario,
        telefono: comercioData.telefono,
        imagen: null,
      });
    }
  };

  return (
    <Cabecera>
     {/*  <BoxTitle name={comercioData.nombre} title="Tu negocio" /> */}
      <div
        className={`row row-cols-1 row-cols-md-4 mt-5 ${
          isEditing ? "editing" : ""
        }`}
      >
        <BoxSide icon="person-circle" link="Perfil" />
        <div className="col col-md-8 offset-0">
          <div className="row row-cols-1 row-cols-md-1">
            <div className="col">
              <div className="card w-100 mt-3">
                <h4 className="fw-semibold text-center pt-4">
                  Información básica
                </h4>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-3">
                  <div className="col-6 offset-3 text-center">
                    <img
                      src={
                        isEditing && formData.imagen
                          ? URL.createObjectURL(formData.imagen)
                          : comercioData.imagen ||
                            "../img/avatar.png"
                      }
                      className="img-fluid rounded-circle avatar"
                      alt="img-perfil"
                    />
                    {/* Mostrar el input para cargar la imagen solo en modo de edición */}
                    {isEditing && (
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control mt-2"
                        id="imagen"
                        name="imagen"
                        onChange={handleInputChange}
                      />
                    )}
                  </div>

                  <div
                    className={`card-body text-center ${
                      isEditing ? "editing" : ""
                    }`}
                  >
                    {isEditing ? (
                      <form onSubmit={handleCreate} className="col-8 offset-2">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control input-rounded"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre y apellido"
                            value={formData.nombre}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control input-rounded"
                            id="email"
                            name="email"
                            placeholder="email@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control input-rounded"
                            id="horario"
                            name="horario"
                            placeholder="Horario"
                            value={formData.horario}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="tel"
                            className="form-control input-rounded"
                            id="telefono"
                            name="telefono"
                            placeholder="Teléfono/Whatsapp"
                            value={formData.telefono}
                            onChange={handleInputChange}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn button button-dark"
                        >
                          GUARDAR
                        </button>
                      </form>
                    ) : (
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <h6 className="fw-semibold">Dirección:</h6>
                          <span className="small">
                            {comercioData.direccion}
                          </span>
                        </li>
                        <li className="list-group-item">
                          <h6 className="fw-semibold">Teléfono</h6>
                          <span className="small">{comercioData.telefono}</span>
                        </li>
                        <li className="list-group-item">
                          <h6 className="fw-semibold">Horario de atención:</h6>
                          <span className="small">{comercioData.horario}</span>
                        </li>
                      </ul>
                    )}
                    <button
                      type="button"
                      className="btn button button-dark mt-3"
                      onClick={
                        isCreating ? toggleEdit : () => setIsCreating(true)
                      }
                    >
                      {isEditing
                        ? "CANCELAR"
                        : isCreating
                        ? "CANCELAR"
                        : "EDITAR"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cabecera>
  );
}

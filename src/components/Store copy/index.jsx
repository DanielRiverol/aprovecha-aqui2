import { useState } from "react";
import Cabecera from "../Cabecera";
import { BoxTitle, BoxSide } from "../Boxes";
// eslint-disable-next-line react/prop-types
export default function Comercio({ name, address, phone, horario, img }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    negocio: "",
    telefono: "",
    imagen: "", // Nueva propiedad para la imagen
  });

  const toggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    // Reiniciar el formulario al cambiar entre editar y no editar
    setFormData({
      nombre: "",
      email: "",
      negocio: "",
      telefono: "",
      imagen: "", // Nueva propiedad para la imagen
    });
  };

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

  const handleSave = (e) => {
    e.preventDefault();
    // Aquí deberías agregar la lógica para guardar los datos editados
    // Puedes enviarlos al servidor, actualizar el estado, etc.
    console.log("Datos editados:", formData);
    // Desactivar la edición después de guardar
    toggleEdit();
  };

  return (
    <Cabecera>
      {/* Title */}
      <BoxTitle name={name} title="Tu negocio" />
      <div className={`row row-cols-1 row-cols-md-4 mt-5 ${isEditing ? 'editing' : ''}`}>
        {/* Sidebar */}
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
                      src={isEditing && formData.imagen ? URL.createObjectURL(formData.imagen) : img}
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
                  <div className={`card-body text-center ${isEditing ? 'editing' : ''}`}>
                    {isEditing ? (
                      <form onSubmit={handleSave} className="col-8 offset-2">
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
                            id="negocio"
                            name="negocio"
                            placeholder="Tu negocio"
                            value={formData.negocio}
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
                          <span className="small">{address}</span>
                        </li>
                        <li className="list-group-item">
                          <h6 className="fw-semibold">Teléfono</h6>
                          <span className="small">{phone}</span>
                        </li>
                        <li className="list-group-item">
                          <h6 className="fw-semibold">Horario de atención:</h6>
                          <span className="small">{horario}</span>
                        </li>
                      </ul>
                    )}
                    <button
                      type="button"
                      className="btn button button-dark mt-3"
                      onClick={toggleEdit}
                    >
                      {isEditing ? "CANCELAR" : "EDITAR"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ... Resto del código ... */}
          </div>
        </div>
      </div>
    </Cabecera>
  );
}

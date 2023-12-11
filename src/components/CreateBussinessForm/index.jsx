// components/CreateBusinessForm.jsx
import { useState } from "react";

const CreateBusinessForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    nombreNegocio: "",
    direccion: "",
    telefono: "",
    horario: "",
    logo: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setFormData({ ...formData, [name]: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSave}>
      <div className="col col-6 offset-3">
        <div className="my-3">
          <label htmlFor="nombreNegocio" className="form-label">
            Nombre del negocio
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreNegocio"
            name="nombreNegocio"
            placeholder="Tu negocio"
            value={formData.nombreNegocio}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            placeholder="Ingresa tu dirección"
            value={formData.direccion}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            placeholder="Ingrese un teléfono/whatsapp"
            value={formData.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="horario" className="form-label">
            Horario
          </label>
          <input
            type="text"
            className="form-control"
            id="horario"
            name="horario"
            placeholder="Lunes a Viernes 8:00 a 21:00"
            value={formData.horario}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="logo" className="form-label">
            Logo
          </label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            id="logo"
            name="logo"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn button button-dark">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default CreateBusinessForm;

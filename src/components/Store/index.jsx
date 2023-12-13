import  { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function BusinessInfo({ businessId }) {
  const [businessData, setBusinessData] = useState(null);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(businessId);
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

    fetchBusinessData();
  }, [businessId]);

  if (!businessData) {
    return <p>Cargando...</p>; // Puedes mostrar un mensaje de carga mientras se obtiene la información del negocio
  }

  return (
    <div className="row row-cols-1 my-5">
      <div className="col col-md-8 offset-3">
        <div className="card w-100 mt-3">
          <div className="row">
            <div className="col-md-8 offset-2">
              <div className="card-body text-center">
                <h4 className="card-title fw-semibold my-5">
                  Información del negocio
                </h4>

                <div className="mb-3">
                  <label htmlFor="nombreNegocio">Nombre del negocio:</label>
                  <span className="fw-bold">{businessData.nombreNegocio}</span>
                </div>

                <div className="mb-3">
                  <label htmlFor="direccion">Dirección:</label>
                  <span>{businessData.direccion}</span>
                </div>

                <div className="mb-3">
                  <label htmlFor="telefono">Teléfono/Whatsapp:</label>
                  <span>{businessData.telefono}</span>
                </div>

                <div className="mb-3">
                  <label htmlFor="zona">Barrio:</label>
                  <span>{businessData.zona}</span>
                </div>

                <div className="mb-3">
                  <label htmlFor="horario">Horario de Atención:</label>
                  <span>{businessData.horarioAtencion}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;

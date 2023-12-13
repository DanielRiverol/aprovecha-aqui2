import Cabecera from "../Cabecera";
import { BoxTitle, BoxSide } from "../Boxes";
// eslint-disable-next-line react/prop-types
function Profile({ name, email, imagen = "../img/store-default.png" }) {
  return (
    <Cabecera>
      {/* Title */}
      <BoxTitle name={name} title="Tu perfil" />
      <div className="row row-cols-1 row-cols-md-4 mt-5">
        {/* Sidebar */}
        <BoxSide icon="person-circle" link="comercio" title="Enlaces"/>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cabecera>
  );
}

export default Profile;

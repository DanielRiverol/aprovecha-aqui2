import Navegacion from "../../components/Navegacion";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <>
      <Navegacion />
      <div className="container-fluid">
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </>
  );
}
export default PaginaBase;

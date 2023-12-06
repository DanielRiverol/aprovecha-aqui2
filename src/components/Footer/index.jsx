export default function Footer() {
  return (
    <>
      <footer className="row row-cols-1 row-cols-md-2 text-light">
        <div className="col">
          <h3 className="fw-semibold">AprovechAQUÍ</h3>
        </div>
        <div className="col">
          <h6>¿Necesitas ayuda?</h6>
          <p className="small">
            Contáctanos por email:
            <a
              href="#"
              className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              contacto@aprovechaaqui.com
            </a>
          </p>
          <a
            href="#"
            className="small me-2 link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            Sobre...
          </a>
          <a
            href="#"
            className="small me-2 link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            Políticas de privacidad
          </a>
          <a
            href="#"
            className="small link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            Términos y condiciones
          </a>
        </div>
      </footer>
    </>
  );
}

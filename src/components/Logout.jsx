const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      // Llamada a la API para cerrar sesión
      const response = await fetch(
        
        `${import.meta.env.VITE_BACKEND_URL}/api/users/logout` ||
          "http://localhost:4000/api/users/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        // Eliminar el token de sesión del almacenamiento local
        localStorage.removeItem("token");

        // Redirigir a la página de inicio de sesión o a otra página después de cerrar sesión
        window.location.href = "/";
      } else {
        console.error("Error al cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    /*  <button onClick={handleLogout}>
      Cerrar sesión
    </button> */
    <p
      onClick={handleLogout}
      className="me-2 link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
    >
      <i className="bi bi-box-arrow-left"></i> Salir
    </p>
  );
};

export default LogoutButton;

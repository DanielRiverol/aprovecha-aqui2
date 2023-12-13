import { useState, useEffect } from "react";
import UserProfile from "../../components/Profile";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = sessionStorage.getItem("userId");
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}` ||
            `http://localhost:4000/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
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

    fetchUserData();
  }, []);

  return (
    <>
      {userData && (
        <UserProfile
          name={userData.user.nombre}
          email={userData.user.email}
        />
      )}
    </>
  );
}

export default Profile;

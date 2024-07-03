import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8080";
const profileUrl = `${baseUrl}/profile`;

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const token = sessionStorage.getItem("JWTtoken");

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(profileUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setUserInfo({ name: response.data.name });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [token]);

  return isLoading ? <h1>Loading...</h1> : <h1>Welcome {userInfo.name}!</h1>;
}

export default Profile;

import { useState, useEffect } from "react";

const baseUrl = "http://localhost:8080";
const profileUrl = `${baseUrl}/profile`;
import axios from "axios";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const getProfile = async () => {
    const token = sessionStorage.getItem('token');
    console.log('token', token)
    try {
      const profileResponse = await axios.get(`${baseUrl}/profile`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      console.log(profileResponse)
      setIsLoading(false);
      setUserInfo(profileResponse.data);

    } catch (error) {
      const errorMessage = error;
      console.log(errorMessage)
    }
  }

  useEffect(() => {
    // Here grab the token from sessionStorage and then make an axios request to profileUrl endpoint.
    // Remember to include the token in Authorization header
    getProfile();
  }, []);

  return isLoading ? <h1>Loading...</h1> : <h1>Welcome {userInfo.name}!</h1>;
}

export default Profile;


/* 

*/
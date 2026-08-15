import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;
// Login User
export const loginUser = async (data) => {
  
      console.log("Hii 2");
  return await axios.post(
    `${VITE_API_URL}/login`,
    data
  );
};

// Register User
export const registerUser = async (data) => {
  return await axios.post(
    `${VITE_API_URL}/register`,
    data
  );
};
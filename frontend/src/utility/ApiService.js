import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.5:5000';
const urlshot_API = `${API_BASE_URL}/jobs`;
const USER_API_URL = `${API_BASE_URL}/auth`;


export const loginUser = async (userData) => {
    console.log("ekhdiuegfbk",userData)
  try {
    const response = await axios.post(`${USER_API_URL}/send-otp`, userData);
    console.log("ekhdiuegfbk",response)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const validotp = async (userData) => {
  try {
    const response = await axios.post(`${USER_API_URL}/validate-otp`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const alljobs = async (urlData) => {
  try {
    const response = await axios.get(`${urlshot_API}/alljobs`, urlData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

// export const getUserDashboard = async (email) => {
//   try {
//     const response = await axios.get(`${urlshot_API}/dashboard`,{
//         params: { email: email }
//       });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.error);
//   }
// };

// export const deleteUrlData = async (data) => {
//   try {
//     const response = await axios.delete(`${urlshot_API}/deleteUrl`, { data: data });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.error);
//   }
// };


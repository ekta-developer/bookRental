import { useNavigate } from "react-router";
import { toast } from "react-toastify";

//! MY FUNCTIONS
const getToken = () => {
  return localStorage.getItem("accessToken");
};
const getLanguage = () => {
  return localStorage.getItem("language") || "en";
};

export const createHeaders = () => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      Language: getLanguage(),
    },
  };
};

export const createFormHeaders = () => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getToken()}`,
      Language: getLanguage(),
    },
  };
};
export const createHeadersAdmin = () => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  };
};
export const createFormHeadersAdmin = () => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getToken()}`,
    },
  };
};

const useLogout = () => {
  const navigate = useNavigate();
  const logoutAction = (msg) => {
    localStorage.removeItem("IMAGE_BASE_URL");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("sideBar");
    localStorage.removeItem("userDetail");
    toast.error(msg);
    navigate("/admin/auth-login");
  };

  return logoutAction;
};

export default useLogout;

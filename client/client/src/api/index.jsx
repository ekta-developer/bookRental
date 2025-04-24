import axios from "axios";
import { createHeaders } from "../utils";
import { BASE_URL } from "../assets/constants/constants";

export const AddUserLoginAPI = async (data) => {
  const headers = createHeaders();
  return await axios.post(`${BASE_URL}add-users`, data, headers);
};

export const GetUserListAPI = async (data) => {
  const headers = createHeaders();
  return await axios.post(`${BASE_URL}get-users`, data, headers);
};

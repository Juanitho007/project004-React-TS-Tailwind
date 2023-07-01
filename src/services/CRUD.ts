const baseUrl = import.meta.env.VITE_URL_BASE;
import axios from "axios";
import { toast } from "react-toastify";
import { Users } from "../interfaces/interfaces";

export const createUsers = async (data:Users) => {
  const url = `${baseUrl}/users`;
  try {
    await axios.post(url, data);
    toast.success("User created successfully!");
  } catch (error) {
    toast.error("Error creating user");
    throw new Error("Error al crear el usuario");
  }
};
export const readUsers = async () => {
  const url = `${baseUrl}/users`
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    toast.error("Error reading user");
    throw new Error("Error al cargar a los usuarios");
  }
};
export const updateUsers = async (userId: number, data: Users) => {
  const url = `${baseUrl}/users/${userId}`;
  try {
    await axios.put(url, data);
    toast.success("User updated successfully!");
  } catch (error) {
    toast.error("Error updating user");
    throw new Error("Error al actualizar el usuario");
  }
};
export const deleteUsers = async (userId:number) => {
  const url = `${baseUrl}/users/${userId}`;
  try {
    await axios.delete(url);
    toast.success("User deleted successfully!");
  } catch (error) {
    toast.error("Error deleting user");
    throw new Error("Error al eliminar el usuario");
  }
};

export const emptyValueForm = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
  image_url: "https://juanitho004.netlify.app/img/usersDefault.png",
};

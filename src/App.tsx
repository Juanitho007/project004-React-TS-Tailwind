import { useEffect, useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Users } from "./interfaces/interfaces";
import {
  readUsers,
  createUsers,
  updateUsers,
  deleteUsers,
  emptyValueForm,
} from "./services/CRUD";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
function App() {
  const [idUserToDelete, setIdUserToDelete] = useState<number | null>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [idUserToEdit, setIdUserToEdit] = useState<number | null>();
  const [formData, setFormData] = useState<Users>(emptyValueForm);
  const [users, setUsers] = useState<Users[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const loadUsers = async () => {
    const users = await readUsers();
    setUsers(users);
  };
  const handleCreateUpdate = async (data: Users) => {
    if (idUserToEdit) await updateUsers(idUserToEdit, data);
    else await createUsers(data);
    await loadUsers();
    setIdUserToEdit(null);
    handleFormVisible();
  };
  const handleModalDelete = (userId: number) => {
    setIdUserToDelete(userId);
    setIsModalVisible(true);
  };
  const handleDelete = async (userId: number) => {
    await deleteUsers(userId);
    setIsModalVisible(!isModalVisible);
    setIdUserToDelete(null);
    await loadUsers();
  };
  const handleDeleteCancel = () => {
    setIsModalVisible(!isModalVisible);
    setIdUserToDelete(null);
  };
  const handleFormVisible = () => {
    setIsFormVisible(!isFormVisible);
    setIdUserToEdit(null);
    setFormData(emptyValueForm);
  };
  const handleEdit = (userData: Users) => {
    setIdUserToEdit(userData.id);
    const formData = {
      id: userData.id,
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      password: userData.password,
      birthday: userData.birthday,
      image_url: userData.image_url,
    };
    setFormData(formData);
    setIsFormVisible(!isFormVisible);
  };
  const handleEditCancel = () => {
    setIdUserToEdit(null);
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    /* const data = Object.fromEntries(formData.entries()); */
    const data: Users = {
      id: Number(formData.get("id")),
      first_name: String(formData.get("first_name")),
      last_name: String(formData.get("last_name")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      birthday: String(formData.get("birthday")),
      image_url: String(formData.get("image_url")),
    };
    await handleCreateUpdate(data);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="min-w-full min-h-screen bg-gradient-to-r from-cyan-200 to-cyan-600 flex flex-col justify-center items-center p-10 text-zinc-600 gap-10 text-center">
      <Header handleFormVisible={handleFormVisible} />
      {isFormVisible && (
        <UserForm
          handleFormVisible={handleFormVisible}
          handleEditCancel={handleEditCancel}
          handleSubmit={handleSubmit}
          idUserToEdit={idUserToEdit}
          formRef={formRef}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {isModalVisible && (
        <Modal
          handleDelete={handleDelete}
          idUserToDelete={idUserToDelete}
          handleDeleteCancel={handleDeleteCancel}
        />
      )}
      {users ? (
        <UserList
          handleDelete={handleModalDelete}
          handleEdit={handleEdit}
          users={users}
        />
      ) : (
        <span className="loader"></span>
      )}
      <Footer />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;

export interface Users {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  birthday: string;
  image_url: string;
}
export interface UsersList {
  users: Users[];
  handleDelete: (userId: number) => void;
  handleEdit: (userData: Users) => void;
}
export interface UserCardProps {
  user: Users;
  handleDelete: (userId: number) => void;
  handleEdit: (userData: Users) => void;
}
export interface UserFormProps {
  formRef: React.RefObject<HTMLFormElement>;
  idUserToEdit: number | null | undefined;
  handleEditCancel: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleFormVisible: () => void;
  formData: Users;
  setFormData: React.Dispatch<React.SetStateAction<Users>>;
}
export interface HeaderProps {
  handleFormVisible: () => void;
}
export interface ModalProps {
  handleDelete: (userId: number) => void;
  idUserToDelete: number | null | undefined;
  handleDeleteCancel: () => void;
}
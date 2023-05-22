import { UsersList } from "../interfaces/interfaces";
import UserCard from "./UserCard";

const UserList = ({
  users,
  handleEdit,
  handleDelete,
}: UsersList) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default UserList

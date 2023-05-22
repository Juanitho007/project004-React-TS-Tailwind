import { UserCardProps } from "../interfaces/interfaces";

const UserCard = ({ user, handleEdit, handleDelete }: UserCardProps) => {
  return (
    <div className="flex flex-col justify-between text-zinc-800 p-4 rounded-br-3xl rounded-tl-3xl gap-2 max-w-full xss:w-[320px] xss:min-h-[380px] border-2 border-gray-600 bg-gray-400/30">
      <div>
        <img
          className="xss:w-auto h-[280px] object-cover rounded-3xl mx-auto p-2"
          src={user.image_url}
          alt={`${user.first_name} ${user.last_name}`}
        />
      </div>
      <section className="flex flex-col">
        <h2 className="flex font-bold text-2xl w-full text-start border-b-2 border-black">
          {user.first_name.toUpperCase()} {user.last_name.toUpperCase()}
        </h2>
        <p className="flex flex-wrap gap-1">
          <b>Email: </b> {user.email.toLowerCase()}
        </p>
        <p className="flex flex-wrap gap-1">
          <b>Birthday: </b> {user.birthday.split("-").reverse().join("/")}
        </p>{" "}
        <div className=" text-end">
          <button onClick={() => handleEdit(user)}>
            <i className="bx bxs-message-square-edit bx-tada text-3xl p-2"></i>
          </button>
          <button onClick={() => handleDelete(user.id)}>
            <i className="bx bxs-message-square-x bx-tada text-3xl p-2"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserCard;

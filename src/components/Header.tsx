import { HeaderProps } from "../interfaces/interfaces";

const Header = ({ handleFormVisible }: HeaderProps) => {
  return (
    <header className="flex flex-row gap-10 items-center content-center text-center">
      <h1 className="text-3xl font-bold text-zinc-800">
        Users Admin by Juan Nuñez
      </h1>
      <button
        className="bg-white p-1 rounded-r-2xl"
        onClick={handleFormVisible}
      >
        <i className="bx bxs-user-plus bx-tada text-3xl text-cyan-500"></i>
        <span>New user</span>
      </button>
    </header>
  );
};

export default Header

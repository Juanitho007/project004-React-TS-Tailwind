import { ModalProps } from "../interfaces/interfaces";

const Modal = ({
  handleDelete,
  idUserToDelete,
  handleDeleteCancel,
}: ModalProps) => {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-10 bg-cyan-400/70 backdrop-blur-[2px] outline-none focus:outline-none">
        <div className="relative mx-auto my-6 xs:max-w-3xl xs:w-auto w-[250px]">
          <div className="border-0 rounded-3xl shadow-xl relative flex flex-col w-full bg-gray-300 p-8">
            <p className="text-2xl font-bold text-red-500">
              Esta seguro que desea eliminar al usuario
            </p>
            <div className="flex gap-6 justify-center">
              <button
                onClick={() => {
                  handleDelete(idUserToDelete as number);
                }}
                className="p-2 bg-red-200 hover:bg-red-400 rounded-3xl"
              >
                Eliminar
              </button>
              <button
                onClick={handleDeleteCancel}
                className="p-2 bg-cyan-200 hover:bg-cyan-400 rounded-3xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

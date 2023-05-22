import { UserFormProps } from "../interfaces/interfaces";

const UserForm = ({
  handleSubmit,
  formRef,
  handleFormVisible,
  idUserToEdit,
  handleEditCancel,
  setFormData,
  formData
}: UserFormProps) => {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-10 bg-cyan-400/70 backdrop-blur-[2px] outline-none focus:outline-none">
        <div className="relative mx-auto my-6 xs:max-w-3xl xs:w-auto w-[250px]">
          <div className="border-0 rounded-3xl shadow-xl relative flex flex-col w-full bg-gray-300">
            <div className="flex justify-between p-5 border-b border-white">
              <h3 className="text-3xl font=semibold">
                {idUserToEdit ? "Edit" : "Add"} User
              </h3>
              <button onClick={handleFormVisible}>
                <i className="bx bxs-message-square-x bx-tada"></i>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <form
                className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full flex flex-col"
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <label htmlFor="first_name" className="text-lg font-bold">
                  First Name:
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="first_name"
                  defaultValue={formData.first_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      first_name: e.target.value,
                    })
                  }
                  required
                />

                <label htmlFor="last_name" className="text-lg font-bold">
                  Last Name:
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="last_name"
                  defaultValue={formData.last_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      last_name: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="email" className="text-lg font-bold">
                  Email:
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  defaultValue={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="password" className="text-lg font-bold">
                  Password:
                </label>
                <input
                  autoComplete="off"
                  type="password"
                  name="password"
                  defaultValue={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="birthday" className="text-lg font-bold">
                  Birthday:
                </label>
                <input
                  autoComplete="off"
                  type="date"
                  name="birthday"
                  defaultValue={formData.birthday}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthday: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="image_url" className="text-lg font-bold">
                  Image Url:
                </label>
                <input
                  autoComplete="off"
                  type="url"
                  name="image_url"
                  defaultValue={formData.image_url}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image_url: e.target.value,
                    })
                  }
                  required
                />
                <div
                  className="flex items-center justify-between flex-col p-2
                "
                >
                  <button
                    className="rounded-3xl border-2
                 bg-cyan-300 border-white text-white p-2"
                  >
                    {idUserToEdit ? "Update User" : "Create User"}
                  </button>
                  {idUserToEdit && (
                    <button
                      className="rounded-3xl border-2
                 bg-cyan-300 border-white text-white p-2"
                      onClick={handleEditCancel}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;

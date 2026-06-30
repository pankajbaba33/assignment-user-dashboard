import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: {
        name: formData.company,
      },
    };
    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    // Save to LocalStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
    });
    navigate("/")
  };

  const fields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone", name: "phone", type: "tel" },
    { label: "Company", name: "company", type: "text" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create New User
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {fields.map((field) => (
            <div key={field.name}>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                {field.label}
              </label>

              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Create User
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UserForm;
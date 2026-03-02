import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../services/api";
import { CheckLine, Cross, House, Pencil, Trash, X } from "lucide-react";
import { NavLink } from "react-router";
import { LogOut } from "../components/LogOut";
import { ShowModal } from "../components/ShowModal";
import { toast } from "react-toastify";

export const AdminDashboard = () => {
  const [activeService, setActiveService] = useState(null);
  const [services, setServices] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  // FETCH SERVICES
  const fetchServices = async () => {
    try {
      const { data } = await api.get("/admin/services/list");
      setServices(data.services);
    } catch (error) {
      console.log(error.response?.data?.message || "Server not responding");
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async ({ name, description }) => {
    console.log("This is the description added: ", description);
    try {
      const { data } = await api.post("/admin/services/create", {
        name,
        description,
      });
      setServices((prev) => [...prev, data.service]);
      toast.success(data.message);
      reset();
    } catch (error) {
      const message = error.response?.data?.message || "Server not responding";
      toast.error(message);
    }
  };

  // Delete service
  const handleDelete = async (id) => {
    try {
      const { data } = await api.delete(`/admin/services/delete/${id}`);
      setServices((prev) => prev.filter((service) => service._id !== id));
      toast.success(data.message);
    } catch (error) {
      const message = error.response?.data?.message || "Server not responding";
      toast.error(message);
    } finally {
      setActiveService(null);
    }
  };

  // Start edit
  const handleEdit = (service) => {
    setEditId(service._id);
    setEditValue(service.name);
    setEditDescription(service.description); // Set description for editing
  };

  //Cancel Edit
  const cancelEdit = () => {
    setEditId(null);
    setEditValue("");
  };

  // Save edit
  const handleSave = async (id, serviceName, description) => {
    console.log(editValue, serviceName);
    if (serviceName === editValue.trim() && description === editDescription) {
      alert("No changes detected");
      return;
    }

    try {
      const { data } = await api.put(`/admin/services/update/${id}`, {
        name: editValue,
        description: editDescription || "", // Save the description too
      });
      toast.success(data.message);
      setServices((prev) =>
        prev.map((service) => (service._id === id ? data.service : service)),
      );
      setEditId(null);
      setEditValue("");
      setEditDescription(""); // Clear the description after saving
    } catch (error) {
      const message = error.response?.data?.message || "Server not responding";
      toast.error(message);
    } finally {
      setEditId(null);
    }
  };

  return (
    <div className="h-screen w-full md:w-[80vw] flex flex-col bg-linear-to-br from-blue-950 via-blue-900 to-cyan-700 text-white p-4 relative">
      <div className="flex relative w-full justify-center items-center h-10 pb-4">
        <div className="flex justify-between w-1/2 items-center relative">
          <div className="text-center">
            <NavLink
              to="/"
              className=" flex justify-center text-cyan-400 hover:text-cyan-300 text-sm transition"
            >
              <House />
            </NavLink>
          </div>
          <LogOut />
        </div>
      </div>

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 shrink-0">
        Thega Daily Admin Dashboard
      </h1>

      <div className="w-full flex justify-center items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? "bg-red-500" : "bg-green-400"} p-1 cursor-pointer font-semibold text-xl w-56 rounded-2xl mb-2`}
        >
          {!isOpen ? "Add new service" : "Cancel"}
        </button>
      </div>

      {/* Add service */}
      {isOpen && (
        <div className="max-w-xl w-full mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 mb-2 shrink-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Name Field */}
            <input
              {...register("name")}
              placeholder="Enter service name"
              className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {/* Description Field */}
            <textarea
              {...register("description")}
              placeholder="Enter service description"
              className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-cyan-400 resize-none min-h-50"
            />
            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              type="submit"
              className={`p-2 rounded-lg font-semibold ${isSubmitting ? "bg-gray-400" : "bg-cyan-500 hover:bg-cyan-600 cursor-pointer"}`}
            >
              {isSubmitting ? "Adding..." : "Add"}
            </button>
          </form>
        </div>
      )}

      {/* Services container */}
      <div
        className="max-w-xl w-full mx-auto bg-white/10 backdrop-blur-lg border 
      border-white/20 rounded-xl p-4 flex-1 overflow-hidden pb-14"
      >
        <h2 className="mb-3 font-semibold">Services ({services?.length})</h2>

        {/* Scrollable list */}
        <div className="h-full overflow-y-auto pr-1 flex flex-col gap-2">
          {services?.length === 0 && (
            <p className="text-slate-300">No services added yet</p>
          )}

          {services.map((service) => (
            <div
              key={service._id}
              className="flex flex-col gap-2 bg-white/10 p-2 rounded-lg"
            >
              {editId === service._id ? (
                <div className="flex flex-col">
                  <input
                    placeholder="Enter service name"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 bg-white/10 px-2 py-1 rounded outline-none"
                  />
                  <textarea
                    placeholder="Enter service description"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="flex-1 min-h-25 bg-white/10 px-2 py-1 rounded outline-none mt-2 resize-y"
                    rows={4}
                  />
                </div>
              ) : (
                <span className="font-light">{service.name}</span>
              )}

              <div className="flex items-center border-t justify-between  sm:flex-row sm:justify-center gap-2 sm:gap-10">
                {/* Save the Service */}
                {editId === service._id ? (
                  <>
                    <button
                      onClick={() =>
                        handleSave(
                          service._id,
                          service.name,
                          service.description,
                        )
                      }
                      className="p-2 rounded cursor-pointer w-full text-center flex justify-center items-center"
                    >
                      <CheckLine className="hover:text-green-200   transition-colors text-green-500" />
                    </button>

                    <button
                      onClick={() => cancelEdit()}
                      className="p-2 rounded-xl w-full cursor-pointer flex justify-center items-center"
                    >
                      <X className="hover:text-red-300 transition-colors text-red-500" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(service)}
                      className="p-2 rounded-xl w-full cursor-pointer text-center flex justify-center items-center"
                    >
                      <Pencil className="hover:text-yellow-400 transition-colors text-yellow-200" />
                    </button>
                    <button
                      onClick={() => setActiveService(service)} // Pass the whole service
                      className="p-2 rounded-xl w-full cursor-pointer flex justify-center items-center"
                    >
                      <Trash className="hover:text-red-300 transition-colors text-red-500" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeService && (
        <ShowModal
          isOpen={!!activeService}
          onClose={() => setActiveService(null)}
          onConfirm={() => handleDelete(activeService._id)}
          title={"Delete Service"}
          message={`Are you sure you want to delete ${activeService.name}?`}
        />
      )}
    </div>
  );
};

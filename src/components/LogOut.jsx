import { LogOutIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../services/api";
import { ShowModal } from "./ShowModal";

export const LogOut = () => {
  const [isOpen, setIsopen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/admin/logout");
      localStorage.removeItem("user");
      setIsopen(false);

      navigate("/admin/login");
    } catch (error) {
      console.log(error.response?.data?.message || "Server not responding");
    }
  };

  return (
    <>
      <div className="p-4 m-4 flex justify-end">
        <div onClick={() => setIsopen(true)}>
          <LogOutIcon className="hover:text-red-500 transition-colors cursor-pointer" />
        </div>
      </div>

      <ShowModal
        className="absolute z-50 flex items-center bg-opacity-50 top-8 right-2 "
        isOpen={isOpen}
        onClose={() => setIsopen(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out of the admin panel?"
        confirmText="Logout"
        type="danger"
      />
    </>
  );
};

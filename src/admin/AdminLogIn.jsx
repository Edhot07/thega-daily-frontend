import { Eye, EyeOff } from "lucide-react";
import api from "../services/api";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useState } from "react";

export const AdminLogIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const { data: res } = await api.post("/admin/login", {
        username: data.username,
        password: data.password,
      });

      toast.success(res.message);

      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/admin/dashboard");
    } catch (err) {
      const message =
        err.response?.data?.message || "Unable to connect to server";
      toast.error(message);
    }
  };

  return (
    <div
      className="
        min-h-screen
        md:w-[80vw] w-full
        flex items-center justify-center
        bg-linear-to-br from-blue-950 via-blue-900 to-cyan-700
        px-4
        "
    >
      {/* Card container */}
      <div
        className="
            w-full max-w-md
            backdrop-blur-lg
            bg-white/10
            border border-white/20
            rounded-2xl
            shadow-xl
            p-6 sm:p-8
            "
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Thega Daily</h1>

          <p className="text-slate-300 text-sm mt-1">Admin Login</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Username */}
          <div className="flex flex-col gap-1">
            <label className="text-slate-200 text-sm">Username</label>

            <input
              className="
                            px-3 py-2
                            rounded-lg
                            bg-white/10
                            border border-white/20
                            text-white
                            placeholder-slate-400
                            focus:outline-none
                            focus:ring-2
                            focus:ring-cyan-400
                            "
              placeholder="Enter username"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 2,
                  message: "Minimum length is 2",
                },
              })}
            />

            {errors.username && (
              <p className="text-red-400 text-sm">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-slate-200 text-sm">Password</label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              className={`
                            px-3 py-2 relative
                            rounded-lg
                            bg-white/10
                            border border-white/20
                            text-white
                            placeholder-slate-400
                            focus:outline-none
                            focus:ring-2
                            focus:ring-cyan-400 pr-10
                            `}
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                  message: "Must include letter, number, and symbol",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
            {showPassword ? (
              <EyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 border-none top-1/2 text-white/50 cursor-pointer"
              />
            ) : (
              <Eye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 border-none text-white/50 cursor-pointer"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
                        mt-2
                        py-2
                        rounded-lg
                        font-semibold
                        transition
                        ${
                          isSubmitting
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-cyan-500 hover:bg-cyan-600"
                        }
                        `}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <NavLink
            to="/"
            className="
                        text-cyan-400
                        hover:text-cyan-300
                        text-sm
                        transition
                        "
          >
            ← Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

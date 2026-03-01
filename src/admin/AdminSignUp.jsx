import api from "../services/api"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router"
import { toast } from "react-toastify";

export const AdminSignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()
    const onSubmit = async (data) => {

        try {

            // const response = await api.post("/admin/signup", data);

            toast.success(response.data.message);

            navigate("/login");

        } catch (error) {

            const message =
                error.response?.data?.message ||
                "Server not responding";

            toast.error(message);

        }

    };


    return (
        <div className="
        min-h-screen
        md:w-[80vw] w-full
        flex items-center justify-center
        bg-linear-to-br from-blue-950 via-blue-900 to-cyan-700
        px-4
        ">

            {/* Card container */}
            <div className="
            w-full max-w-md
            backdrop-blur-lg
            bg-white/10
            border border-white/20
            rounded-2xl
            shadow-xl
            p-6 sm:p-8
            ">

                {/* Header */}
                <div className="text-center mb-6">

                    <h1 className="text-3xl font-bold text-white">
                        Thega Daily
                    </h1>

                    <p className="text-slate-300 text-sm mt-1">
                        Admin Sign In
                    </p>

                </div>


                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >

                    {/* Name */}
                    <div className="flex flex-col gap-1">

                        <label className="text-slate-200 text-sm">
                            Name
                        </label>

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
                            placeholder="Enter your name"
                            {...register("name", {
                                required: "Name is required",
                                pattern: {
                                    value: /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/,
                                    message: "First letter must be uppercase"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Minimum length is 2"
                                }
                            })}
                        />

                        {errors.name && (
                            <p className="text-red-400 text-sm">
                                {errors.name.message}
                            </p>
                        )}

                    </div>


                    {/* Username */}
                    <div className="flex flex-col gap-1">

                        <label className="text-slate-200 text-sm">
                            Username
                        </label>

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
                                    message: "Minimum length is 2"
                                }
                            })}
                        />

                        {errors.username && (
                            <p className="text-red-400 text-sm">
                                {errors.username.message}
                            </p>
                        )}

                    </div>


                    {/* Password */}
                    <div className="flex flex-col gap-1">

                        <label className="text-slate-200 text-sm">
                            Password
                        </label>

                        <input
                            type="password"
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
                            placeholder="Enter password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value:
                                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                                    message:
                                        "Must include letter, number, and symbol"
                                }
                            })}
                        />

                        {errors.password && (
                            <p className="text-red-400 text-sm">
                                {errors.password.message}
                            </p>
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
                        ${isSubmitting
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-cyan-500 hover:bg-cyan-600"
                            }
                        `}
                    >
                        {isSubmitting ? "Signing in..." : "Sign Up"}
                    </button>

                </form>

                <div className="mt-6 text-center text-slate-200 text-sm">
                    <span>Are you an Admin?</span>
                    <NavLink
                        to="/login"
                        className="
                        text-cyan-400
                        hover:text-cyan-300
                        text-sm
                        transition
                        "
                    >
                        {" "}Log In
                    </NavLink>
                </div>


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
    )
}
import { useEffect, useState } from "react";
import api from "../services/api";
import { motion } from "framer-motion";

export const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data } = await api.get("/admin/services/list");

      // backend should return array
      setServices(data.services);
    } catch (error) {
      console.log(error.response?.data?.message || "Server not responding");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id="services"
      className=" w-full text-white px-6 py-12 md:px-12 md:col-span-2"
    >
      {/* Section Header */}
      <motion.div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-3 "
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
        text-slate-300
        max-w-xl
        mx-auto
        "
        >
          We provide professional digital and business solutions to help
          individuals and organizations grow efficiently.
        </motion.p>
      </motion.div>

      {/* No services */}
      {services?.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
        text-center
        border border-white/20
        rounded-xl
        p-8
        text-slate-300
        "
        >
          No services available right now
        </motion.div>
      )}

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-3
                            gap-6
                            "
      >
        {services?.map((service, index) => (
          <div
            key={service._id}
            className="
                group
                bg-white/5
                border border-white/10
                backdrop-blur-md
                rounded-xl
                p-6
                transition
                hover:bg-white/10
                hover:scale-[1.03]
                hover:shadow-lg
                cursor-pointer
                "
          >
            {/* Icon circle */}
            <div
              className="
                w-12 h-12
                flex items-center justify-center
                rounded-full
                bg-cyan-500/20
                text-cyan-400
                font-bold
                text-lg
                mb-4
                group-hover:bg-cyan-500/30
                transition
                "
            >
              {index + 1}
            </div>

            {/* Service name */}
            <h2
              className="
                text-xl
                font-semibold
                mb-2
                group-hover:text-cyan-400
                transition
                "
            >
              {service.name}
            </h2>

            {/* Description */}
            <p
              className="
                text-slate-300 line-clamp-6
                text-sm
                "
            >
              {service.description ? service.description : service.name}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

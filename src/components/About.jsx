import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-[80vh] flex flex-col justify-center text-white  p-6 md:p-12 md:col-span-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About Our Company
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-2xl mb-4 text-sm md:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        We are a modern digital solutions company dedicated to helping
        businesses grow through technology. Our mission is to deliver scalable,
        efficient, and innovative solutions tailored to your needs.
      </motion.p>

      <motion.p
        className="text-gray-300 max-w-2xl text-sm md:text-base"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        From web development to digital transformation, we help turn ideas into
        reality. Our team focuses on performance, user experience, and
        cutting-edge technologies.
      </motion.p>

      {/* stats */}
      <motion.div
        className="flex gap-6 mt-6 flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-blue-400">50+</h3>
          <p className="text-gray-400 text-sm">Projects Completed</p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-blue-400">5+</h3>
          <p className="text-gray-400 text-sm">Years Experience</p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-blue-400">100%</h3>
          <p className="text-gray-400 text-sm">Client Satisfaction</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

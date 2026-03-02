import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="
            w-full
            mt-12
            border-t border-white/10
            bg-cyan-800/50
            backdrop-blur-sm
            text-white
            p-6 sm:p-8 md:p-12
            rounded-b-xl
            md:col-span-2
            "
    >
      <div
        className="
            max-w-7xl mx-auto
            grid grid-cols-1 md:grid-cols-3
            gap-8
            "
      >
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Thega Daily</h3>

          <p className="text-gray-400 text-sm">
            Building modern digital solutions to help businesses grow, innovate,
            and succeed in the digital world.
          </p>

          <div className="mt-4 text-sm text-gray-400">
            <p>Email: contact@yourbrand.com</p>
            <p>Phone: +91 8414906818</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">Send Message</h3>

          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="
                            bg-white/10
                            border border-white/20
                            rounded-lg
                            px-3 py-2
                            text-sm
                            outline-none
                            focus:border-blue-400
                            "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                            bg-white/10
                            border border-white/20
                            rounded-lg
                            px-3 py-2
                            text-sm
                            outline-none
                            focus:border-blue-400
                            "
            />

            <textarea
              placeholder="Your Message"
              rows="3"
              className="
                            bg-white/10
                            border border-white/20
                            rounded-lg
                            px-3 py-2
                            text-sm
                            outline-none
                            focus:border-blue-400
                            resize-none
                            "
            />

            <button
              type="submit"
              className="
                            bg-blue-600
                            hover:bg-blue-700
                            rounded-lg
                            px-4 py-2
                            text-sm
                            font-medium
                            transition
                            "
            >
              Send Message
            </button>
          </form>
        </div> */}

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>

          <div className="flex gap-2 text-sm text-gray-400">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 rounded-lg md:p-2 p-4 text-sm font-medium hover:bg-blue-600 transition"
            >
              <Facebook />
            </a>

            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 rounded-lg md:p-2 p-4 text-sm font-medium hover:bg-blue-400 transition"
            >
              <Twitter />
            </a>

            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 rounded-lg md:p-2 p-4 text-sm font-medium hover:bg-pink-500 transition"
            >
              <Instagram />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 rounded-lg md:p-2 p-4 text-sm font-medium hover:bg-blue-700 transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="
            mt-8
            pt-4
            border-t border-white/10
            text-center
            text-xs
            text-gray-500
            "
      >
        © 2026 Thega Daily. All rights reserved.
      </div>
    </footer>
  );
};

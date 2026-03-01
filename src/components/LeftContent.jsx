export const LeftContent = () => {
  return (
    <section
      className="
        h-full w-full 
        flex flex-col justify-center 
        text-white
        p-4 sm:p-6 md:p-8
        "
    >
      {/* Badge */}
      <span
        className="
            bg-blue-500/20 text-blue-300 
            px-2 py-1 sm:px-3 sm:py-1
            rounded-full 
            text-xs sm:text-sm
            w-fit mb-3 sm:mb-4
            "
      >
        Welcome
      </span>

      {/* Heading */}
      <h1
        className="
            font-bold leading-tight 
            mb-3 sm:mb-4
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            "
      >
        Welcome to Thega Daily
      </h1>

      {/* Description */}
      <p
        className="
            text-gray-300 
            mb-4 sm:mb-6
            text-sm sm:text-base md:text-lg
            max-w-md
            "
      >
        Discover powerful digital solutions designed to help you grow, innovate,
        and succeed. Explore our services and build something amazing with us.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <button
          className="
                bg-blue-600 hover:bg-blue-700
                px-3 py-1.5 sm:px-5 sm:py-2
                text-sm sm:text-base
                rounded-lg transition
                "
        >
          <a href="#about">Explore</a>
        </button>

        <button
          className="
                border border-gray-400 hover:border-white
                px-3 py-1.5 sm:px-5 sm:py-2
                text-sm sm:text-base
                rounded-lg transition
                "
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

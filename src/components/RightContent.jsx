import business_photo from "../assets/business_photo.png";

export const RightContent = () => {
  return (
    <section
      className="
        w-full h-full 
        flex justify-center items-center 
        relative
        p-4 sm:p-6 md:p-8
        "
    >
      {/* Image container */}
      <div
        className="
            relative 
            w-full h-full 
            max-h-100 md:max-h-full
            rounded-2xl 
            overflow-hidden
            shadow-lg
            "
      >
        {/* Image */}
        <img
          className="
          w-full h-full 
          object-cover
          "
          src={business_photo}
          alt="business"
        />

        {/* Gradient overlay */}
        <div
          className="
                absolute inset-0 
                bg-linear-to-tl  
                from-blue-900/70 
                via-blue-500/20 
                to-transparent
                "
        />

        {/* Floating info card */}
        <div
          className="
                absolute bottom-4 left-4 right-4
                bg-white/10 backdrop-blur-md
                border border-white/20
                rounded-xl
                p-3 sm:p-4
                text-white
                "
        >
          <h3
            className="
                    font-semibold
                    text-sm sm:text-base md:text-lg
                    "
          >
            Empower Your Digital Journey
          </h3>

          <p
            className="
                    text-xs sm:text-sm
                    text-gray-200
                    "
          >
            Innovative solutions to help your business grow faster and smarter.
          </p>
        </div>
      </div>
    </section>
  );
};

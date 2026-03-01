import { NavLink } from "react-router";
export const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-4">
      <NavLink className="underline text-blue-400 font-semibold" to="/">
        Back to Home
      </NavLink>
      <img
        className="size-64 sm:w-175 sm:h-96"
        src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-page-not-found-png-image_6674563.jpg"
        alt="Page not found"
      />
    </div>
  );
};

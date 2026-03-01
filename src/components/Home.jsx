import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";
import { About } from "./About";
import { Contact } from "./Contact";
import { Services } from "./Services";
import { Suspense } from "react";

export const Home = () => {
  return (
    <div
      id="home"
      className="
        grid grid-cols-1 
        md:grid-cols-2 
        rounded-xl 
        p-3 md:p-6 
        gap-4
        h-full
        "
    >
      <LeftContent />
      <RightContent />

      <div className="md:col-span-2">
        <About />
        <Suspense fallback={<ServiceLoader />}>
          <Services />
        </Suspense>
        <Contact />
      </div>
    </div>
  );
};

function ServiceLoader() {
  return (
    <div className="md:col-span-2 w-full px-6 py-12 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for loading state */}
        <div className="animate-pulse bg-gray-200 h-24 rounded"></div>
        <div className="animate-pulse bg-gray-200 h-24 rounded"></div>
        <div className="animate-pulse bg-gray-200 h-24 rounded"></div>
      </div>
    </div>
  );
}

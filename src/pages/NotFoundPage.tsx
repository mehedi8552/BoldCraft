import { Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import notFound from "../assets/icon/notfound.svg";

const NotFoundPage = () => {
  const error = useRouteError() as {
    error: { message: string };
    internal: boolean;
    status: number;
    statusText: string;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-primaryColors">
      <motion.img
        src={notFound}
        alt="not found"
        className="w-1/2 max-w-xs md:max-w-md lg:max-w-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="max-w-md text-center mt-4">
        <h1 className="text-4xl font-bold mb-4">Oops! That page can’t be found</h1>
        <p className="text-small  Mulish-light mb-8">
          {error?.error?.message || "An unexpected error occurred."}
        </p>
        <Link
          to={`/`}
          className="inline-block rounded-lg border-2 border-primary px-[40px] py-[15px] Mulish-medium text-link uppercase tracking-wider transition duration-300 hover:-translate-y-2 bg-primary text-white hover:text-primary hover:bg-transparent"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

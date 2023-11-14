import { Link, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error || { message: "Unknown error" };

  return (
    <div className="bg-[#000302] min-h-screen flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center md:flex-row md:mb-0 mb-6">
        <svg
          className="w-16 h-16 text-red-500 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1 className="text-red-500 font-extrabold text-3xl">ERROR 404</h1>
      </div>
      <h2 className="text-4xl mb-2 px-6 text-center">Oops! Page introuvable</h2>
      <p className="text-lg mb-4 px-6 text-center">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <p className="italic text-gray-300 px-6 text-center">{error.message}</p>
      <Link
        to="/"
        className="mt-4 text-red-500 hover:underline transition duration-300"
      >
        Retour à la page d'accueil
      </Link>
    </div>
  );
}

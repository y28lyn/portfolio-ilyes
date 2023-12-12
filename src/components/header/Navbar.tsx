import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavbarBlack, setIsNavbarBlack] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Ajouter ou supprimer la classe 'overflow-hidden' lorsque le menu est ouvert ou fermé
    if (!menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  // Fermer le menu et rétablir le défilement lorsque l'emplacement change
  useEffect(() => {
    setMenuOpen(false); // Fermer le menu lorsque la page change
    document.body.classList.remove("overflow-hidden"); // Rétablir le défilement
  }, [location]);

  useEffect(() => {
    // Ajoutez une classe CSS pour le fond noir lorsque vous descendez de 50 pixels
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarBlack(true);
      } else {
        setIsNavbarBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 text-white transition ease-in-out duration-300 ${
        isNavbarBlack
          ? menuOpen
            ? "" // Si le menu est ouvert, ne pas appliquer de flou
            : "bg-[#000302] bg-opacity-50 backdrop-blur-lg" // Appliquer le flou si le menu est fermé
          : "bg-transparent"
      }`}
    >
      <div
        className={` flex items-center justify-between mx-auto p-3 relative ${
          menuOpen ? "menu-open-blur" : "" // Classe conditionnelle pour le flou
        }`}
      >
        <div className="flex items-center text-white hover:text-gray-200 transition ease-in-out duration-300">
          <Link to="/" className="flex items-center">
            <img
              src="portfolio-icon.png"
              className="h-8 mr-3"
              alt="Portfolio Logo"
            />
            <span className="self-center text-2xl md:text-xl font-semibold whitespace-nowrap">
              Portfolio
            </span>
          </Link>
        </div>
        <div className="flex flex-row font-medium md:py-1 md:mt-1 md:border-0 md:order-2 md:text-[11px] -ml-6">
          <a
            className="text-white hover:text-gray-200 transition ease-in-out duration-300 ml-2 md:block hidden"
            href="https://www.linkedin.com/in/ilyes-beirade-86920b222/"
            target="blank"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              height="24"
              width="24"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.35 0H2.65C1.194 0 0 1.194 0 2.65v18.7C0 22.805 1.194 24 2.65 24h18.7c1.456 0 2.65-1.194 2.65-2.65V2.65C24 1.194 22.806 0 21.35 0zM7.647 20.994h-3.77V9.273h3.77v11.72zM5.262 8.262a2.192 2.192 0 110-4.384 2.192 2.192 0 010 4.384zM20.994 20.994h-3.773v-5.984c0-1.416-.026-3.24-1.974-3.24-1.975 0-2.275 1.54-2.275 3.126v6.098h-3.77V9.273h3.707v1.656h.049c.514-.977 1.77-2.013 3.659-2.013 3.92 0 4.635 2.578 4.635 5.94v6.138z"></path>
            </svg>
          </a>
          <span className="hidden md:block bg-white h-1 w-1 rounded-xl ml-2 my-auto"></span>
          <a
            className="text-white hover:text-gray-200 transition ease-in-out duration-300 ml-2 md:block hidden"
            href="https://github.com/y28lyn"
            target="blank"
          >
            <span className="sr-only">Github</span>
            <svg
              height="24"
              width="24"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Ouvrir le menu</span>
            {menuOpen ? (
              // Afficher la croix lorsque le menu est ouvert
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Afficher les lignes lorsque le menu est fermé
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          {menuOpen && (
            // Afficher le menu mobile sous forme de carré blanc en bas de la croix
            <div
              className="absolute bottom-0 left-0 top-16 w-full h-screen bg-[#000302] bg-opacity-80 backdrop-blur-lg py-8 px-2 z-50"
              id="navbar-sticky"
            >
              <ul className="flex flex-col font-medium bg-transpaent text-white rounded shadow-sm -mt-4">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 md:link md:link-underline md:link-underline-black"
                    aria-current="page"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/parcours"
                    className="block py-2 pl-3 pr-4 md:link md:link-underline md:link-underline-black"
                  >
                    Parcours scolaire
                  </Link>
                </li>
                <li>
                  <Link
                    to="/experience"
                    className="block py-2 pl-3 pr-4 md:link md:link-underline md:link-underline-black"
                  >
                    Expérience professionnelle
                  </Link>
                </li>
                <li>
                  <Link
                    to="/situation"
                    className="block py-2 pl-3 pr-4 md:link md:link-underline md:link-underline-black"
                  >
                    Situation professionnelle
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certification"
                    className="block py-2 pl-3 pr-4 md:link md:link-underline md:link-underline-black"
                  >
                    Certification
                  </Link>
                </li>
                <li>
                  <Link
                    to="/veille"
                    className="block py-2 pl-3 pr-4 md:link md:link-underline md:link-underline-black"
                  >
                    Veille technologique
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 pl-3 pr-4 md:link md:link-underline md:link-underline-black"
                  >
                    Contact
                  </Link>
                </li>
                <span className="w-[98%] bg-white h-[1px] px-2 mx-auto"></span>
                <div className="flex flex-row">
                  <li>
                    <span className="sr-only">LinkedIn</span>
                    <a
                      className="block py-2 pr-4 ml-2 "
                      href="https://www.linkedin.com/in/ilyes-beirade-86920b222/"
                      target="blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M21.35 0H2.65C1.194 0 0 1.194 0 2.65v18.7C0 22.805 1.194 24 2.65 24h18.7c1.456 0 2.65-1.194 2.65-2.65V2.65C24 1.194 22.806 0 21.35 0zM7.647 20.994h-3.77V9.273h3.77v11.72zM5.262 8.262a2.192 2.192 0 110-4.384 2.192 2.192 0 010 4.384zM20.994 20.994h-3.773v-5.984c0-1.416-.026-3.24-1.974-3.24-1.975 0-2.275 1.54-2.275 3.126v6.098h-3.77V9.273h3.707v1.656h.049c.514-.977 1.77-2.013 3.659-2.013 3.92 0 4.635 2.578 4.635 5.94v6.138z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="-ml-2">
                    <span className="sr-only">Github</span>
                    <a
                      className="block py-2 pr-4 ml-2 "
                      href="https://github.com/y28lyn"
                      target="blank"
                    >
                      <svg
                        fill="#fff"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 0C7.164 0 0 7.163 0 16c0 7.069 4.577 13.07 10.943 15.165.8.148 1.092-.348 1.092-.77 0-.382-.014-1.389-.02-2.72-4.45.97-5.391-2.148-5.391-2.148-.727-1.848-1.776-2.34-1.776-2.34-1.452-.991.11-.973.11-.973 1.605.113 2.448 1.65 2.448 1.65 1.425 2.44 3.743 1.737 4.656 1.328.145-1.033.562-1.738 1.022-2.135-3.572-.408-7.33-1.787-7.33-7.966 0-1.758.627-3.192 1.65-4.313-.16-.41-.717-2.046.157-4.262 0 0 1.35-.434 4.42 1.654a14.53 14.53 0 014.11 0c3.066-2.088 4.416-1.654 4.416-1.654.874 2.216.317 3.852.157 4.262 1.024 1.121 1.647 2.554 1.647 4.313 0 6.192-3.762 7.555-7.34 7.958.577.496 1.088 1.478 1.088 2.974 0 2.147-.02 3.879-.02 4.407 0 .426.287.923 1.1.768 6.365-2.097 10.941-8.1 10.941-15.167C32 7.163 24.836 0 16 0"></path>
                      </svg>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="text-[1.1vw] flex flex-row p-4 md:p-0 mt-4 font-medium md:space-x-4 md:mt-1 md:border-0">
            <li>
              <Link
                to="/"
                className="py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/parcours"
                className="py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
              >
                Parcours scolaire
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
              >
                Expérience professionnelle
              </Link>
            </li>
            <li>
              <Link
                to="/situation"
                className="py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
              >
                Situation professionnelle
              </Link>
            </li>
            <li>
              <Link
                to="/certification"
                className="py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
              >
                Certification
              </Link>
            </li>
            <li>
              <Link
                to="/veille"
                className="py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
              >
                Veille technologique
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="py-2 pl-3 pr-4 text-white link link-underline link-underline-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-[#000302]">
        <div className="block w-[95%] h-[1px] bg-white mx-auto"></div>
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-col md:flex-row md:flex-wrap md:items-start items-center justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link
                to="/conditions_utilisation"
                className="text-base leading-6 text-white hover:text-gray-300"
              >
                Conditions d'utilisation
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                to="/politique_confidentialite"
                className="text-base leading-6 text-white hover:text-gray-300"
              >
                Politique de confidentialité
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                to="/mention_legales"
                className="text-base leading-6 text-white hover:text-gray-300"
              >
                Mention légales
              </Link>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a
              href="https://www.linkedin.com/in/ilyes-beirade-86920b222/"
              className="text-gray-200 hover:text-gray-400"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.35 0H2.65C1.194 0 0 1.194 0 2.65v18.7C0 22.805 1.194 24 2.65 24h18.7c1.456 0 2.65-1.194 2.65-2.65V2.65C24 1.194 22.806 0 21.35 0zM7.647 20.994h-3.77V9.273h3.77v11.72zM5.262 8.262a2.192 2.192 0 110-4.384 2.192 2.192 0 010 4.384zM20.994 20.994h-3.773v-5.984c0-1.416-.026-3.24-1.974-3.24-1.975 0-2.275 1.54-2.275 3.126v6.098h-3.77V9.273h3.707v1.656h.049c.514-.977 1.77-2.013 3.659-2.013 3.92 0 4.635 2.578 4.635 5.94v6.138z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/y28lyn"
              className="text-gray-200 hover:text-gray-400"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
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
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 BEIRADE Ilyes
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;

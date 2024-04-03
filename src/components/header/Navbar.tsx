import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
  to: string;
  title: string;
}

const navLinks: NavLink[] = [
  { to: "/", title: "Accueil" },
  { to: "/parcours", title: "Parcours scolaire" },
  { to: "/experience", title: "Expériences professionnelles" },
  { to: "/situation", title: "Situations professionnelles" },
  { to: "/certification", title: "Certification" },
  { to: "/veille", title: "Veille technologique" },
  { to: "/contact", title: "Contact" },
];

interface NavItemProps {
  to: string;
  title: string;
}

const NavItem: React.FC<NavItemProps & { onClick?: () => void }> = ({
  to,
  title,
  onClick,
}) => (
  <Link
    to={to}
    className="text-sm font-semibold pb-[0.3rem] md:link link-underline link-underline-black"
    onClick={onClick}
  >
    {title}
  </Link>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    setHasScrolled(offset > 30);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const originalStyle = window.getComputedStyle(body).overflow;
    body.style.overflow = isMobileMenuOpen ? "hidden" : originalStyle;

    return () => {
      body.style.overflow = originalStyle;
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <section>
      <div
        className={`fixed w-full top-0 left-0 transition duration-300 ease-in-out z-50 ${
          hasScrolled ||
          location.pathname === "/politique_confidentialite" ||
          location.pathname === "/conditions_utilisation" ||
          location.pathname === "/mention_legales"
            ? "bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg"
            : ""
        }`}
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 md:h-[12vh]">
            <div className="hidden md:flex flex-row gap-2">
              <Link to="/" className="flex flex-row gap-2">
                <img src="/portfolio-icon.webp" alt="" className="w-8 h-8" />
                <h2 className="text-white text-2xl font-bold">Portfolio</h2>
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-10 text-lg text-white">
              {navLinks.map((link) => (
                <NavItem key={link.title} {...link} />
              ))}
            </div>

            <div className="md:hidden block">
              <Link to="/" className="flex flex-row gap-2">
                <img src="/portfolio-icon.webp" alt="" className="w-8 h-8" />
                <h2 className="text-white text-2xl font-bold">Portfolio</h2>
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex p-2 ml-5 text-white transition-all duration-200 rounded-md lg:hidden"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Open Menu"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="py-4 fixed w-full h-full bg-white dark:bg-[#101314] lg:hidden z-50">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Menu
              </p>

              <button
                type="button"
                className="inline-flex p-2 text-black dark:text-white transition-all duration-200 rounded-md"
                onClick={toggleMobileMenu}
                aria-label="Close Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
              </button>
            </div>

            <div className="mt-6">
              <div className="flex flex-col space-y-2 gap-2 text-black dark:text-white">
                {navLinks.map((link) => (
                  <NavItem key={link.title} {...link} onClick={closeMenu} />
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </section>
  );
};

export default Navbar;

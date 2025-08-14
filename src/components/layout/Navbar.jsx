import { NavLink } from "react-router-dom";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Project", path: "/project" },
    { name: "Design", path: "/design" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Portofolio", path: "/portofolio" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav
        className="flex items-center justify-between px-6 py-4 
                      bg-light-card/80 dark:bg-dark-card/80 
                      border border-light-border dark:border-dark-border 
                      backdrop-blur-xl rounded-xl shadow-md"
      >
        {/* Logo */}
        <div className="text-xl font-bold text-light-text dark:text-dark-text">
          Alfi Nur Danialin.
        </div>

        {/* Center Menu - Desktop only */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-light-primary dark:hover:text-dark-primary transition-colors ${
                  isActive
                    ? "text-light-primary dark:text-dark-primary font-semibold"
                    : "text-light-text dark:text-dark-text"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* ThemeSwitcher + Mobile Button */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher /> {/* ✅ Tampil di semua ukuran */}
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-light-text dark:text-dark-text"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 mx-4 bg-light-card/90 dark:bg-dark-card/90 
                        rounded-xl p-4 border border-light-border dark:border-dark-border 
                        backdrop-blur-md shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `hover:text-light-primary dark:hover:text-dark-primary transition-colors ${
                    isActive
                      ? "text-light-primary dark:text-dark-primary font-semibold"
                      : "text-light-text dark:text-dark-text"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

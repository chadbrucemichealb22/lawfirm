import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Practice Areas", to: "practice" },
  { label: "Experience", to: "experience" },
  { label: "Testimonials", to: "testimonials" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md border-b border-gold-400/10 py-3"
            : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="font-display text-xl text-parchment tracking-wide leading-none">
              Chad Michael Bruce
            </span>
            <span className="font-mono text-[10px] text-gold-400 tracking-widest2 uppercase mt-1">
              Attorney at Law
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={700}
                offset={-80}
                className="hover-underline font-body text-sm text-parchment/70 hover:text-parchment tracking-widest uppercase cursor-pointer transition-colors duration-200"
              >
                {link.label}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={700}
              offset={-80}
              className="btn-outline cursor-pointer text-xs"
            >
              Free Consultation
            </ScrollLink>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <IconButton
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{ color: "#c9a84c" }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-parchment/80 hover:text-gold-400 cursor-pointer transition-colors"
                >
                  {link.label}
                </ScrollLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

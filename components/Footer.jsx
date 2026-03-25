import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { label: "About", to: "about" },
  { label: "Practice Areas", to: "practice" },
  { label: "Experience", to: "experience" },
  { label: "Testimonials", to: "testimonials" },
  { label: "Contact", to: "contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070910] border-t border-gold-400/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl text-parchment mb-1">
              Chad Michael Bruce
            </div>
            <div className="font-mono text-[10px] text-gold-400/50 tracking-widest2 uppercase mb-5">
              Attorney at Law
            </div>
            <p className="font-body text-parchment/35 text-sm font-light leading-relaxed">
              Senior attorney practising corporate law, commercial litigation,
              and regulatory compliance from Dublin, Ireland.
            </p>
            <div className="flex gap-2 mt-6">
              <IconButton
                component="a"
                href="#"
                size="small"
                sx={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: 0,
                  color: "rgba(201,168,76,0.5)",
                  "&:hover": {
                    borderColor: "#c9a84c",
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.05)",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                size="small"
                sx={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: 0,
                  color: "rgba(201,168,76,0.5)",
                  "&:hover": {
                    borderColor: "#c9a84c",
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.05)",
                  },
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[9px] text-gold-400/40 tracking-widest uppercase mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <ScrollLink
                  key={l.to}
                  to={l.to}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className="hover-underline font-body text-sm text-parchment/40 hover:text-parchment/80 cursor-pointer transition-colors w-fit"
                >
                  {l.label}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <p className="font-mono text-[9px] text-gold-400/40 tracking-widest uppercase mb-5">
              Legal Notice
            </p>
            <p className="font-body text-parchment/25 text-xs font-light leading-relaxed">
              The content of this website is provided for informational purposes
              only and does not constitute legal advice. No solicitor–client
              relationship is created by your use of this site. Bruce &amp;
              Associates LLP is regulated by the Law Society of Ireland.
            </p>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-parchment/20 tracking-widest">
            © {new Date().getFullYear()} Bruce &amp; Associates LLP. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
              <a
                key={t}
                href="#"
                className="font-mono text-[10px] text-parchment/20 hover:text-gold-400/50 tracking-widest uppercase transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

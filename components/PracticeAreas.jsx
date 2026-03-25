import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const areas = [
  {
    icon: <BusinessCenterOutlinedIcon fontSize="large" />,
    number: "01",
    title: "Corporate Law",
    subtitle: "Mergers, Acquisitions & Governance",
    description:
      "Comprehensive corporate advisory for complex transactions, board governance, shareholder agreements, and cross-border M&A activity across Europe and the United States.",
    tags: ["M&A", "IPO", "Due Diligence", "Shareholder Rights"],
  },
  {
    icon: <GavelOutlinedIcon fontSize="large" />,
    number: "02",
    title: "Commercial Litigation",
    subtitle: "High-Stakes Dispute Resolution",
    description:
      "Strategic advocacy in the High Court and Court of Appeal. Representing clients in complex commercial disputes, breach of contract, injunctions, and enforcement proceedings.",
    tags: ["High Court", "Injunctions", "Arbitration", "Appeals"],
  },
  {
    icon: <AccountBalanceOutlinedIcon fontSize="large" />,
    number: "03",
    title: "Financial Law",
    subtitle: "Banking, Finance & Securities",
    description:
      "Advising financial institutions, funds, and investors on regulatory compliance, loan agreements, securities offerings, and Central Bank of Ireland regulatory matters.",
    tags: ["CBI Compliance", "Fund Law", "Securities", "Lending"],
  },
  {
    icon: <ShieldOutlinedIcon fontSize="large" />,
    number: "04",
    title: "Regulatory & Compliance",
    subtitle: "Risk Management & Governance",
    description:
      "Guiding clients through Ireland's evolving regulatory landscape including GDPR, competition law, data protection, and EU financial services directives.",
    tags: ["GDPR", "Competition Law", "Data Protection", "DORA"],
  },
];

export default function PracticeAreas() {
  const [hovered, setHovered] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="practice"
      ref={ref}
      className="relative bg-[#0a0c10] py-32 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Practice Areas</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="section-title max-w-xl">
              Specialised Legal{" "}
              <em className="text-gold-400 italic">Expertise</em>
            </h2>
            <p className="font-body text-parchment/50 font-light max-w-sm">
              Four focused disciplines. One trusted advocate.
              Delivering precision counsel across every matter.
            </p>
          </div>
          <div className="gold-line mt-10 max-w-full" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gold-400/10">
          {areas.map((area, i) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-10 bg-[#0a0c10] cursor-default transition-all duration-500 group ${
                hovered === i ? "bg-[#111318]" : ""
              }`}
            >
              {/* Number */}
              <div className="absolute top-8 right-8 font-display text-6xl text-gold-400/[0.06] font-light leading-none select-none group-hover:text-gold-400/[0.12] transition-all duration-500">
                {area.number}
              </div>

              {/* Icon */}
              <div
                className={`text-gold-400 mb-6 transition-all duration-300 ${
                  hovered === i ? "scale-110" : ""
                }`}
              >
                {area.icon}
              </div>

              <h3 className="font-display text-3xl text-parchment font-light mb-1">
                {area.title}
              </h3>
              <p className="font-mono text-[10px] text-gold-400/60 tracking-widest uppercase mb-5">
                {area.subtitle}
              </p>

              <p className="font-body text-parchment/55 font-light leading-relaxed text-sm mb-6">
                {area.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 border border-gold-400/20 text-gold-400/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learn more */}
              <div
                className={`flex items-center gap-2 font-mono text-[10px] text-gold-400 tracking-widest uppercase transition-all duration-300 ${
                  hovered === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <span>Enquire</span>
                <ArrowForwardIcon sx={{ fontSize: 12 }} />
              </div>

              {/* Bottom border accent */}
              <div
                className={`absolute bottom-0 left-0 h-px bg-gold-400 transition-all duration-500 ${
                  hovered === i ? "w-full" : "w-0"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

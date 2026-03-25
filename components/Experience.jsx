import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Chip from "@mui/material/Chip";

const timeline = [
  {
    year: "2014–Present",
    role: "Senior Partner",
    firm: "Bruce & Associates LLP",
    location: "Dublin, Ireland",
    desc: "Founded and leads a boutique corporate law firm renowned for high-stakes commercial litigation and M&A advisory. The firm has advised on over €4.2B in transactions.",
    tags: ["M&A", "Litigation", "Founding Partner"],
    highlight: true,
  },
  {
    year: "2008–2014",
    role: "Partner",
    firm: "McCann FitzGerald",
    location: "Dublin, Ireland",
    desc: "Elevated to Partner in the corporate and financial services division. Led a team of eight associates on cross-border transactions and complex dispute resolution mandates.",
    tags: ["Corporate", "Financial Services"],
  },
  {
    year: "2004–2008",
    role: "Senior Associate",
    firm: "A&L Goodbody",
    location: "Dublin, Ireland",
    desc: "Focused on capital markets, mergers & acquisitions and private equity transactions. Advised a number of ISEQ-listed entities on regulatory and governance matters.",
    tags: ["Capital Markets", "Private Equity"],
  },
  {
    year: "2002–2004",
    role: "Solicitor",
    firm: "Matheson",
    location: "Dublin, Ireland",
    desc: "Commenced practice in the commercial litigation department. Represented domestic and international clients before the Irish High Court.",
    tags: ["Litigation", "High Court"],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="relative bg-ink py-32">
      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 gold-line" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Career</p>
          <h2 className="section-title">
            Professional{" "}
            <em className="text-gold-400 italic">Experience</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[120px] top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/40 via-gold-400/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="md:flex gap-12 group"
              >
                {/* Year */}
                <div className="hidden md:flex flex-col items-end min-w-[112px] pt-1">
                  <span className="font-mono text-[10px] text-gold-400/60 tracking-widest whitespace-nowrap">
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full mt-1.5 border-2 z-10 transition-all duration-300 group-hover:scale-125 ${
                      item.highlight
                        ? "bg-gold-400 border-gold-400"
                        : "bg-ink border-gold-400/50 group-hover:border-gold-400"
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 p-8 border transition-all duration-300 ${
                    item.highlight
                      ? "border-gold-400/40 bg-gold-400/5"
                      : "border-gold-400/10 hover:border-gold-400/25 bg-white/[0.015]"
                  }`}
                >
                  <div className="md:hidden font-mono text-[10px] text-gold-400/60 tracking-widest mb-2">
                    {item.year}
                  </div>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl text-parchment font-light">
                        {item.role}
                      </h3>
                      <p className="font-body text-gold-400/80 text-sm mt-0.5">
                        {item.firm}
                        <span className="text-parchment/30 mx-2">·</span>
                        <span className="text-parchment/40">{item.location}</span>
                      </p>
                    </div>
                    {item.highlight && (
                      <span className="font-mono text-[9px] tracking-widest uppercase px-3 py-1 bg-gold-400/15 text-gold-400 border border-gold-400/30">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="font-body text-parchment/55 font-light text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(201,168,76,0.2)",
                          color: "rgba(245,240,232,0.4)",
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          height: 24,
                          borderRadius: 0,
                          "& .MuiChip-label": { px: 1.5 },
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

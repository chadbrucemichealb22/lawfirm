import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import Divider from "@mui/material/Divider";
import Image from "next/image";

const credentials = [
  {
    icon: <SchoolOutlinedIcon />,
    title: "Trinity College Dublin",
    subtitle: "BCL (Hons) · LLM in Commercial Law",
  },
  {
    icon: <WorkspacePremiumOutlinedIcon />,
    title: "Law Society of Ireland",
    subtitle: "Qualified Solicitor · Member since 2002",
  },
  {
    icon: <BalanceOutlinedIcon />,
    title: "King's Inns Dublin",
    subtitle: "Barrister-at-Law · Called to the Bar 2004",
  },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="relative bg-ink py-32 overflow-hidden">
      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-400/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Left: portrait + credentials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Portrait frame */}
          <div className="relative">
            <div className="w-full aspect-[4/6] bg-gradient-to-br from-[#1a1e24] to-[#0e1116] border border-gold-400/20 flex items-end justify-center overflow-hidden relative">
              {/* Image */}
              <Image
                src="/chadimage.png"
                alt="Chad Michael Bruce"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-400/40 z-10" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-400/40 z-10" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold-400/40 z-10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-400/40 z-10" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gold-400 text-ink px-5 py-3 z-20">
              <div className="font-mono text-[10px] tracking-widest uppercase">
                Est.
              </div>
              <div className="font-display text-2xl font-medium leading-none">
                2002
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="space-y-4 pt-6">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 p-4 border border-gold-400/10 bg-white/[0.02] hover:border-gold-400/30 transition-colors"
              >
                <div className="text-gold-400 mt-0.5 opacity-70">{c.icon}</div>
                <div>
                  <div className="font-body text-parchment text-sm font-medium">
                    {c.title}
                  </div>
                  <div className="font-mono text-[10px] text-parchment/40 tracking-wide mt-0.5">
                    {c.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div>
            <p className="section-label mb-4">About</p>
            <h2 className="section-title mb-6">
              A Legacy Built on{" "}
              <em className="text-gold-400 italic">Precision</em> &amp; Principle
            </h2>
          </div>

          <Divider sx={{ borderColor: "rgba(201,168,76,0.15)" }} />

          <div className="space-y-5 text-parchment/60 font-body font-light leading-relaxed">
            <p>
              Chad Michael Bruce is one of Ireland's most respected legal
              practitioners, with a distinguished career spanning corporate
              transactions, high-stakes litigation, and regulatory compliance.
              Operating from his offices at the Four Courts in Dublin, he
              provides elite counsel to multinational corporations, financial
              institutions, and high-net-worth individuals.
            </p>
            <p>
              Called to the Irish Bar and qualified as a solicitor, Chad brings
              a rare dual perspective to every matter — combining courtroom
              advocacy with transactional expertise. His approach is defined by
              rigorous analysis, strategic foresight, and an unwavering
              commitment to client outcomes.
            </p>
            <p>
              A regular contributor to the <em>Irish Law Review</em> and
              visiting lecturer at University College Dublin, Chad is recognised
              by Chambers Europe as a leading practitioner in commercial
              litigation and corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: "Corporate Law", years: "22 yrs" },
              { label: "Commercial Litigation", years: "20 yrs" },
              { label: "Mergers & Acquisitions", years: "18 yrs" },
              { label: "Regulatory Compliance", years: "15 yrs" },
            ].map((item) => (
              <div
                key={item.label}
                className="border-l-2 border-gold-400/40 pl-4"
              >
                <div className="font-body text-parchment text-sm">{item.label}</div>
                <div className="font-mono text-[10px] text-gold-400/60 mt-1">
                  {item.years} experience
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
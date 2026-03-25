import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink">
      {/* Background texture / geometric */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large vertical gold line */}
        <div className="absolute top-0 left-[12%] w-px h-full bg-gradient-to-b from-transparent via-gold-400/20 to-transparent" />
        <div className="absolute top-0 right-[12%] w-px h-full bg-gradient-to-b from-transparent via-gold-400/10 to-transparent" />
        {/* Radial glow */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gold-500/5 blur-[120px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Badge top center */}
      <motion.div
        {...fadeUp(0.2)}
        className="absolute top-36 left-1/2 -translate-x-1/2 flex items-center gap-2 border border-gold-400/30 px-5 py-2 bg-gold-400/5 backdrop-blur-sm"
      >
        <GavelOutlinedIcon sx={{ fontSize: 14, color: "#c9a84c" }} />
        <span className="font-mono text-[10px] text-gold-400 tracking-widest2 uppercase whitespace-nowrap">
          Barrister · Solicitor · Counsellor
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-48">
        <div className="max-w-4xl">
          <motion.p {...fadeUp(0.3)} className="section-label mb-6">
            Senior Attorney at Law
          </motion.p>

          <motion.h1
            {...fadeUp(0.45)}
            className="font-display text-[clamp(3.5rem,10vw,8rem)] font-light text-parchment leading-[0.92] tracking-tight mb-8"
          >
            Chad{" "}
            <em className="text-gold-400 not-italic">Michael</em>
            <br />
            Bruce
          </motion.h1>

          <motion.div {...fadeUp(0.6)} className="gold-line mb-8 max-w-sm" />

          <motion.p
            {...fadeUp(0.7)}
            className="font-body text-parchment/60 text-lg font-light leading-relaxed max-w-xl mb-10"
          >
            Over two decades of distinguished legal practice in corporate law,
            commercial litigation, and dispute resolution. Delivering
            uncompromising advocacy from the heart of Dublin, Ireland.
          </motion.p>

          <motion.div {...fadeUp(0.85)} className="flex flex-wrap gap-4 mb-14">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={700}
              offset={-80}
              className="btn-primary cursor-pointer"
            >
              Schedule a Consultation
            </ScrollLink>
            <ScrollLink
              to="practice"
              smooth={true}
              duration={700}
              offset={-80}
              className="btn-outline cursor-pointer"
            >
              Practice Areas
            </ScrollLink>
          </motion.div>

          {/* Location badge */}
          <motion.div
            {...fadeUp(1.0)}
            className="flex items-center gap-2 text-parchment/40"
          >
            <LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
            <span className="font-mono text-xs tracking-widest uppercase">
              Four Courts · Dublin 7, Ireland
            </span>
          </motion.div>
        </div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 border-t border-gold-400/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "22+", label: "Years of Practice" },
            { value: "850+", label: "Cases Resolved" },
            { value: "98%", label: "Client Retention" },
            { value: "4", label: "Practice Areas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl text-gold-400 font-light">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-parchment/40 tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

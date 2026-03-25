import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    quote:
      "Chad's command of corporate law is extraordinary. His strategic advice during our €200M acquisition was decisive, calm under pressure, and ultimately delivered an outcome that exceeded every expectation.",
    author: "Seán O'Driscoll",
    title: "Chief Executive, Liffey Capital Partners",
    stars: 5,
  },
  {
    quote:
      "When we faced a complex cross-border dispute with a US counterparty, Chad navigated both jurisdictions with remarkable fluency. He is, without question, the finest litigator I have worked with in twenty years of business.",
    author: "Patricia Dunne",
    title: "General Counsel, Eurotech Innovations Ltd",
    stars: 5,
  },
  {
    quote:
      "Precise, principled, and relentlessly thorough. Chad transformed a regulatory crisis into a manageable process and protected our institution's licence. His counsel is worth every euro.",
    author: "Conor Healy",
    title: "Managing Director, Hibernian Finance Group",
    stars: 5,
  },
  {
    quote:
      "I have retained Chad for personal estate planning and corporate legal matters for over a decade. His rare ability to explain complex law in plain language, combined with his tenacity in negotiations, sets him apart entirely.",
    author: "Maeve Fitzgerald",
    title: "Founder & Chair, Dublin Property Holdings",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative bg-[#0a0c10] py-32 overflow-hidden"
    >
      {/* Large quote watermark */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 font-display text-[20rem] text-gold-400/[0.03] leading-none select-none pointer-events-none">
        "
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Testimonials</p>
          <h2 className="section-title">
            What Clients{" "}
            <em className="text-gold-400 italic">Say</em>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-8 md:px-16"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                  <StarIcon key={i} sx={{ fontSize: 14, color: "#c9a84c" }} />
                ))}
              </div>

              <FormatQuoteIcon
                sx={{ fontSize: 48, color: "rgba(201,168,76,0.25)", mb: 3 }}
              />

              <blockquote className="font-display text-2xl md:text-3xl text-parchment font-light italic leading-relaxed mb-10">
                {testimonials[active].quote}
              </blockquote>

              <div className="gold-line max-w-[60px] mx-auto mb-8" />

              <div>
                <div className="font-body text-parchment font-medium">
                  {testimonials[active].author}
                </div>
                <div className="font-mono text-[10px] text-gold-400/60 tracking-widest uppercase mt-1">
                  {testimonials[active].title}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-14">
            <IconButton
              onClick={prev}
              sx={{
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: 0,
                color: "#c9a84c",
                width: 44,
                height: 44,
                "&:hover": { borderColor: "#c9a84c", background: "rgba(201,168,76,0.08)" },
              }}
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${
                    i === active
                      ? "w-8 h-1 bg-gold-400"
                      : "w-2 h-1 bg-gold-400/25 hover:bg-gold-400/50"
                  }`}
                />
              ))}
            </div>

            <IconButton
              onClick={next}
              sx={{
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: 0,
                color: "#c9a84c",
                width: 44,
                height: 44,
                "&:hover": { borderColor: "#c9a84c", background: "rgba(201,168,76,0.08)" },
              }}
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </div>
        </motion.div>

        {/* Chambers recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 border border-gold-400/15 p-8 text-center bg-gold-400/[0.02]"
        >
          <p className="font-mono text-[10px] text-gold-400/50 tracking-widest uppercase mb-3">
            Industry Recognition
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-parchment/30 font-mono text-xs tracking-widest uppercase">
            {[
              "Chambers Europe — Band 1",
              "Legal 500 — Leading Individual",
              "The Lawyer — Hot 100",
              "IFLR1000 — Highly Regarded",
            ].map((r) => (
              <span key={r} className="hover:text-gold-400/60 transition-colors cursor-default">
                {r}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

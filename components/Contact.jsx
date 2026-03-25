import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const practiceAreas = [
  "Corporate Law",
  "Commercial Litigation",
  "Financial Law",
  "Regulatory & Compliance",
  "Other",
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });
  const [snack, setSnack] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnack(true);
    setForm({ name: "", email: "", phone: "", area: "", message: "" });
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      fontFamily: "'Jost', sans-serif",
      "& fieldset": { borderColor: "rgba(201,168,76,0.2)" },
      "&:hover fieldset": { borderColor: "rgba(201,168,76,0.5)" },
      "&.Mui-focused fieldset": { borderColor: "#c9a84c", borderWidth: 1 },
    },
    "& .MuiInputLabel-root": {
      fontFamily: "'Jost', sans-serif",
      fontSize: "0.8rem",
      letterSpacing: "0.08em",
      color: "rgba(245,240,232,0.4)",
      "&.Mui-focused": { color: "#c9a84c" },
    },
    "& .MuiInputBase-input": {
      fontFamily: "'Jost', sans-serif",
      color: "#f5f0e8",
      fontSize: "0.9rem",
    },
    "& .MuiSelect-icon": { color: "rgba(201,168,76,0.5)" },
  };

  const contactInfo = [
    {
      icon: <PhoneOutlinedIcon />,
      label: "Telephone",
      value: "+353 1 234 5678",
      link: "tel:+35312345678",
    },
    {
      icon: <EmailOutlinedIcon />,
      label: "Email",
      value: "chad@brucelaw.ie",
      link: "mailto:chad@brucelaw.ie",
    },
    {
      icon: <LocationOnOutlinedIcon />,
      label: "Office",
      value: "Four Courts, Inns Quay, Dublin 7",
      link: "https://maps.google.com",
    },
    {
      icon: <AccessTimeOutlinedIcon />,
      label: "Hours",
      value: "Mon–Fri: 08:30–18:00",
      link: null,
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative bg-ink py-32">
      <div className="absolute top-0 left-0 right-0 gold-line" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Contact</p>
          <h2 className="section-title">
            Begin Your{" "}
            <em className="text-gold-400 italic">Consultation</em>
          </h2>
          <p className="font-body text-parchment/50 font-light mt-4 max-w-lg">
            Initial consultations are confidential and without obligation.
            Chad personally responds to all enquiries within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 border border-gold-400/10 hover:border-gold-400/25 transition-all duration-300 group"
              >
                <div className="text-gold-400/60 group-hover:text-gold-400 transition-colors mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[9px] text-parchment/30 tracking-widest uppercase mb-1">
                    {item.label}
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="font-body text-parchment/70 hover:text-gold-400 transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-parchment/70 text-sm">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="border border-gold-400/15 h-48 flex items-center justify-center bg-white/[0.015] relative overflow-hidden">
              <div className="text-center">
                <LocationOnOutlinedIcon sx={{ color: "rgba(201,168,76,0.3)", fontSize: 32 }} />
                <p className="font-mono text-[10px] text-parchment/25 tracking-widest uppercase mt-2">
                  Four Courts, Dublin
                </p>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-gold-400/25" />
              <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-gold-400/25" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-gold-400/25" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-gold-400/25" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <TextField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={inputSx}
                />
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={inputSx}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  fullWidth
                  sx={inputSx}
                />
                <TextField
                  label="Practice Area"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  select
                  fullWidth
                  sx={inputSx}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          bgcolor: "#141820",
                          border: "1px solid rgba(201,168,76,0.2)",
                          borderRadius: 0,
                          "& .MuiMenuItem-root": {
                            fontFamily: "'Jost', sans-serif",
                            fontSize: "0.85rem",
                            "&:hover": { background: "rgba(201,168,76,0.08)" },
                            "&.Mui-selected": {
                              background: "rgba(201,168,76,0.12)",
                              "&:hover": { background: "rgba(201,168,76,0.18)" },
                            },
                          },
                        },
                      },
                    },
                  }}
                >
                  {practiceAreas.map((a) => (
                    <MenuItem key={a} value={a}>
                      {a}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <TextField
                label="Details of Your Matter"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={6}
                sx={inputSx}
              />

              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="font-mono text-[9px] text-parchment/25 tracking-wide leading-relaxed max-w-xs">
                  All communications are protected by solicitor–client privilege
                  and treated in strictest confidence.
                </p>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#c9a84c",
                    color: "#0e1116",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    borderRadius: 0,
                    px: 5,
                    py: 1.8,
                    whiteSpace: "nowrap",
                    "&:hover": { bgcolor: "#e8c14f" },
                  }}
                >
                  Send Enquiry
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <Snackbar
        open={snack}
        autoHideDuration={5000}
        onClose={() => setSnack(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnack(false)}
          severity="success"
          sx={{
            bgcolor: "#141820",
            color: "#c9a84c",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 0,
            fontFamily: "'Jost', sans-serif",
            "& .MuiAlert-icon": { color: "#c9a84c" },
          }}
        >
          Thank you. Chad will be in touch within 24 hours.
        </Alert>
      </Snackbar>
    </section>
  );
}

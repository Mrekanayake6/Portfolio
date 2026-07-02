import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiInstagram } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

const contacts = [

  {
    icon: <FiGithub />,
    title: "GitHub",
    value: "MRekanayake",
    link: "https://github.com/Mrekanayake6",
    gradient: "from-blue/10 to-cyan/10",
    borderColor: "rgba(59,130,246,0.2)",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    icon: <FiLinkedin />,
    title: "LinkedIn",
    value: "Lakshan Ekanayake",
    link: "https://www.linkedin.com/in/lakshan-ekanayake-164909296/",
    gradient: "from-cyan/10 to-blue/10",
    borderColor: "rgba(6,182,212,0.2)",
    glowColor: "rgba(6,182,212,0.15)",
  },
  {
    icon: <FiInstagram />,
    title: "Instagram",
    value: "s.ekanayake1jjjhjj",
    link: "https://www.instagram.com/s.ekanayake_?igsh=MTlodnM1NXRmdXNjMg%3D%3D&utm_source=qr",
    gradient: "from-cyan/10 to-blue/10",
    borderColor: "rgba(6,182,212,0.2)",
    glowColor: "rgba(6,182,212,0.15)",
  },
  {
    icon: <FiMail />,
    title: "Email",
    value: "lakshanekanayake6@gmail.com",
    link: "mailto:lakshanekanayake6@gmail.com",
    gradient: "from-purple/10 to-blue/10",
    borderColor: "rgba(139,92,246,0.2)",
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    icon: <SiWhatsapp />,
    title: "WhatsApp",
    value: "+94 71 387 2042",
    link: "https://wa.me/94713872042",
    gradient: "from-purple/10 to-cyan/10",
    borderColor: "rgba(139,92,246,0.2)",
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    value: "Sri Lanka",
    link: "#",
    gradient: "from-blue/10 to-purple/10",
    borderColor: "rgba(59,130,246,0.2)",
    glowColor: "rgba(59,130,246,0.15)",
  },


];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Contact</span>
          <h2
            className="font-syne font-extrabold"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Get In <span className="grad-text">Touch</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${c.gradient} border transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]`}
              style={{ borderColor: c.borderColor }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Glow background */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2"
                style={{
                  background: `radial-gradient(circle, ${c.glowColor}, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div className="text-2xl text-white mb-4">{c.icon}</div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-1">{c.title}</h3>

              {/* Value */}
              <p className="text-white/60 text-sm">{c.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14 glass p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-2">
            Let’s build something amazing 🚀
          </h3>
          <p className="text-white/60 text-sm">
            I’m available for freelance projects, product development, and collaborations focused on building modern, scalable web solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
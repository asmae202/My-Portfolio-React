import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeading from "@/components/ui/SectionHeading";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_xxx";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_xxx";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "public_xxx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setStatus("sending");
    setStatusMessage("");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setStatusMessage("Message envoyé ! Je te répondrai bientôt.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
        setStatusMessage(
          "Une erreur est survenue lors de l'envoi. Réessaye plus tard."
        );
      });
  };

  return (
    <motion.section
      id="contact"
      className="relative py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="contact"
          description="Je suis actuellement à la recherche d’un stage présentiel ou à distance. N’hésitez pas à m’envoyer un message pour échanger sur ton projet ou opportunité."
        >
          Contact
        </SectionHeading>

        <div className="relative mt-10 flex justify-center">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-transparent blur-3xl" />
            <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/10 to-transparent blur-3xl" />
          </div>

          <div className="grid w-full max-w-4xl gap-8 lg:grid-cols-2">
            <motion.form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-transparent bg-gradient-to-br from-purple-600/15 via-indigo-600/10 to-transparent p-px shadow-lg shadow-purple-500/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="rounded-3xl bg-card/70 p-8 backdrop-blur">
                <div className="mb-6 space-y-2">
                  <h3 className="text-xl font-semibold">Écris-moi</h3>
                  <p className="text-sm text-muted-foreground">
                    Envoie un message et je te répondrai rapidement.
                  </p>

                  {status !== "idle" ? (
                    <div
                      className={`rounded-xl px-4 py-3 text-sm font-medium ${
                        status === "success"
                          ? "bg-emerald-500/15 text-emerald-200"
                          : "bg-rose-500/10 text-rose-200"
                      }`}
                    >
                      {statusMessage}
                    </div>
                  ) : null}
                </div>
                <div className="grid gap-4">
                  <label className="text-sm font-medium" htmlFor="name">
                    Votre nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
className="rounded-xl border border-border bg-white/90 px-4 py-3 text-sm text-black placeholder:text-gray-400 shadow-sm transition focus:-translate-y-0.5 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
                    placeholder="Votre nom"
                  />

                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
className="rounded-xl border border-border bg-white/90 px-4 py-3 text-sm text-black placeholder:text-gray-400 shadow-sm transition focus:-translate-y-0.5 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
                    placeholder="votre.email@example.com"
                  />

                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
className="resize-none rounded-xl border border-border bg-white/90 px-4 py-3 text-sm text-black placeholder:text-gray-400 shadow-sm transition focus:-translate-y-0.5 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
                    placeholder="Votre message..."
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-transform hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/40 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "sending" ? "Envoi..." : "Envoyer message"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.form>

            <motion.div
              className="relative rounded-3xl border border-transparent bg-gradient-to-br from-purple-600/15 via-indigo-600/10 to-transparent p-px shadow-lg shadow-purple-500/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="rounded-3xl bg-card/70 p-8 backdrop-blur">
                <h3 className="text-xl font-semibold">Informations</h3>
                <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <Mail size={20} />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        className="text-sm text-primary underline-offset-4 hover:underline"
                        href="mailto:a.asmae8765@gmail.com"
                      >
                        a.asmae8765@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <MapPin size={20} />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Marrakech, Maroc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <Github size={20} />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <a
                        className="text-sm text-primary underline-offset-4 hover:underline"
                        href="https://github.com/asmae202"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/asmae202
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <Linkedin size={20} />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <a
                        className="text-sm text-primary underline-offset-4 hover:underline"
                        href="https://www.linkedin.com/in/asmae-a-"
                        target="_blank"
                        rel="noreferrer"
                      >
                        linkedin.com/in/asmae-a-
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

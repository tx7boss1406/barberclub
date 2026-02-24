import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Barbeiros", href: "/#barbeiros" },
  { label: "Depoimentos", href: "/#depoimentos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollTo = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      window.location.href = id;
      return;
    }
    const el = document.getElementById(id.replace("/#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-gold" />
          <span className="font-heading text-xl font-bold tracking-wider text-foreground">
            BARBER CLUB <span className="text-gold">&</span> TATTOO
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="font-body text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/agendar"
            className="gold-gradient rounded px-6 py-2.5 font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Agendar
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-left font-body text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-gold"
                >
                  {l.label}
                </button>
              ))}
              <Link
                to="/agendar"
                onClick={() => setOpen(false)}
                className="gold-gradient mt-2 rounded px-6 py-3 text-center font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Agendar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

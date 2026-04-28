import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SchoolCrest } from "./SchoolCrest";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-brand-radial"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1], rotate: [0, 4, 0, -4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-24 w-24 sm:h-28 sm:w-28"
          >
            <SchoolCrest className="h-full w-full" withRing />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-display text-lg sm:text-xl text-white/95 tracking-wide text-center px-6"
          >
            Dr. Abraham S. Borbor Memorial School
          </motion.p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-accent">of Excellence</p>
          <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

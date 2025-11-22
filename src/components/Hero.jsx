import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(600px 200px at 10% 10%, #000 40%, transparent), radial-gradient(500px 200px at 90% 30%, #000 40%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Elevated essentials for the modern man
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl"
          >
            URAZ crafts premium garments with a focus on timeless style, refined fit, and responsible materials. Designed to last — made to be worn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#collections"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Shop collections
            </a>
            <a
              href="#quality"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 px-6 py-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              Our quality
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Organic cotton</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Made responsibly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Free returns</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1520975922284-2aa72b3a2836?q=80&w=1400&auto=format&fit=crop"
              alt="URAZ menswear hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl px-5 py-4">
            <p className="text-sm font-medium">Signature Oxford Shirt</p>
            <p className="text-xs text-slate-500">Refined fit • Breathable • Durable</p>
          </div>
        </div>
      </div>
    </section>
  );
}

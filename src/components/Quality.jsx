export default function Quality() {
  const highlights = [
    {
      title: "Premium fabrics",
      desc: "Long-staple cotton, breathable linens, and responsible wool blends for lasting comfort.",
    },
    {
      title: "Refined fit",
      desc: "Tailored lines with room to move. Clean silhouettes designed for real life.",
    },
    {
      title: "Considered details",
      desc: "Double-stitched seams, melamine buttons, and reinforcement where it matters.",
    },
    {
      title: "Responsible sourcing",
      desc: "Working with mills that prioritize lower-impact dyeing and fair labor practices.",
    },
  ];

  return (
    <section id="quality" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Quality you can feel</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">Every URAZ garment is built to outlast seasons. We obsess over the hand-feel, drape, and durability of each fabric we choose.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900">
              <p className="font-medium mb-1">{h.title}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    id: 1,
    name: "Oxford Shirt",
    price: 78,
    color: "White",
    image:
      "https://images.unsplash.com/photo-1548883354-2b189df3edc1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Pima Cotton Tee",
    price: 35,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Tailored Chinos",
    price: 89,
    color: "Taupe",
    image:
      "https://images.unsplash.com/photo-1603251579431-8041402bd79a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Wool Overshirt",
    price: 140,
    color: "Navy",
    image:
      "https://images.unsplash.com/photo-1520975922284-2aa72b3a2836?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured collection</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Staple pieces that elevate the everyday</p>
          </div>
          <a href="#" className="text-sm font-medium underline underline-offset-4">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <a key={p.id} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.color}</p>
                </div>
                <p className="font-semibold">${p.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

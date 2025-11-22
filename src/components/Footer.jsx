export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-xl font-semibold tracking-wider">URAZ</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-sm">
            Elevated essentials for men. Designed with intention. Built to last.
          </p>
        </div>
        <div>
          <p className="font-medium mb-2">Contact</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">hello@uraz.co</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">+1 (555) 012-3456</p>
        </div>
        <div>
          <p className="font-medium mb-2">Newsletter</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
            <button className="rounded-lg bg-black text-white px-4 text-sm">Join</button>
          </form>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} URAZ. All rights reserved.
      </div>
    </footer>
  );
}

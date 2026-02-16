export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background-dark py-12 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl font-bold">
            movie
          </span>
          <h1 className="text-primary text-xl font-black tracking-tighter uppercase">
            CineNest
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-sm font-medium">
          <a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Help Center
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Contact Us
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">public</span>
          </a>
          <a
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
          <a
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-slate-600 text-[10px] uppercase tracking-widest font-bold">
        © 2024 CineNest Streaming Service. All Rights Reserved.
      </div>
    </footer>
  );
}

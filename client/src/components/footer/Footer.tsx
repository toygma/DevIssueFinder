const Footer = () => {
  return (
    <footer className="w-full bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img
            src="../../../public/toygma-min.png"
            alt="logo"
            title="logo"
            className="rounded-full h-12 w-12"
          />

          <span className="font-bold text-xl text-white tracking-tight">
            Dev Issue Finder
          </span>
        </div>
        {/* Links */}
        <nav className="flex flex-wrap gap-4 text-gray-300 text-sm">
          <a
            href="https://github.com/toygma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff80b5] transition"
          >
            GitHub
          </a>
          <a href="/privacy" className="hover:text-[#9089fc] transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-[#6ee7b7] transition">
            Terms of Service
          </a>
        </nav>
        {/* Copyright */}
        <div className="text-xs text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Toygma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

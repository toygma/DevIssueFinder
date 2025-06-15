const Footer = () => {
  return (
    <footer className="w-full bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <span className=" w-10 h-10 rounded-full bg-gradient-to-br from-[#ff80b5] via-[#9089fc] to-[#6ee7b7] flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-white/20">
            <svg width="28" height="28" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" fill="white" fillOpacity="0.14"/><path d="M7 15.5V6.5H8.9V13.5H14.9V15.5H7Z" fill="white"/></svg>
          </span>
          <span className="font-bold text-xl text-white tracking-tight">Dev Issue Finder</span>
        </div>
        {/* Links */}
        <nav className="flex flex-wrap gap-4 text-gray-300 text-sm">
          <a href="https://github.com/toygma" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff80b5] transition">
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
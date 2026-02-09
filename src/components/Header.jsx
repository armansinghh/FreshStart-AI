export function Header() {
  return (
    <header className="absolute inset-x-0 top-4 max-w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between" id="head">
      <div className="flex items-center gap-4">
        <a href="index.html"
          className="w-12 h-12 bg-linear-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="font-bold text-white">FS</span>
        </a>
      </div>
      <nav className="flex items-center gap-6 text-sm text-[#a8c7fa] font-bold">
        <a href="#">Docs</a>
        <a href="#">Support</a>
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-200 to-blue-300 overflow-hidden">
          <img src="public/person-placeholder.jpg" alt="avatar" className="w-full h-full rounded-full object-cover" />
        </div>
      </nav>
    </header>
  );
}

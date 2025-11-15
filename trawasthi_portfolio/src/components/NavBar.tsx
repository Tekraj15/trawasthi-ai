import { Link } from "react-scroll";
import { Home, FileText, Briefcase, Pen, ExternalLink } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: FileText },
    { id: "work-experience", label: "Experience", icon: Briefcase },
    { id: "project", label: "Projects", icon: ExternalLink },
    { id: "blog", label: "Blog", icon: Pen },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-lg rounded-full shadow-xl border border-gray-100 px-6 py-3 flex items-center gap-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              activeClass="bg-gray-700 text-white"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-black cursor-pointer transition-all"
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
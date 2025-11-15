import { Link } from "react-scroll";
import {
  Home,
  FileText,
  Briefcase,
  Pen,
  ExternalLink,
  // GraduationCap,
} from "lucide-react";

export default function Navbar() {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: FileText},
    { id: "work-experience", label: "Work", icon: Briefcase},
    { id: "project", label: "Projects", icon: ExternalLink },
    { id: "blog", label: "Blog", icon: Pen},
    // { label: "Education", icon: GraduationCap },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-lg rounded-full shadow-xl border border-gray-100 px-8 py-4 flex items-center gap-8">
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
              className="flex items-center gap-2 text-gray-700 hover:cursor-pointer transition-colors text-sm font-medium"
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

/* src/components/layout/Sidebar.tsx */
import { NavLink } from "react-router-dom";
import { 
  Squares2X2Icon, CalendarIcon, UsersIcon, 
  VideoCameraIcon, ChartBarIcon, Cog6ToothIcon, XMarkIcon 
} from "@heroicons/react/24/outline";

// FIX: Corrected path from ../ to ../../ to reach the context folder
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Squares2X2Icon },
  { name: "Events", href: "/events", icon: CalendarIcon },
  { name: "Attendees", href: "/attendees", icon: UsersIcon },
  { name: "Speakers", href: "/speakers", icon: VideoCameraIcon },
  { name: "Analytics", href: "/analytics", icon: ChartBarIcon },
  { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
];

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  const { user } = useAuth(); // Safely get user from context

  // FIX: Provide fallback values so .charAt() never fails
  const displayName = user?.name || "Guest User";
  const displayEmail = user?.email || "No email available";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/50 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-brand-accent bg-white transition-transform lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-6 border-b border-brand-accent/10">
            <img src="/logo.svg" alt="EventLive" className="h-8 w-auto" />
            <button className="lg:hidden" onClick={() => setIsOpen(false)}><XMarkIcon className="h-6 w-6" /></button>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-bold transition-all ${
                  isActive ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20" : "text-brand-dark hover:bg-brand-surface"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* User Session Block */}
          <div className="border-t border-brand-accent p-4">
            <div className="flex items-center gap-3 rounded-xl bg-brand-surface/30 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                {/* FIX: charAt(0) is now safe because displayName is never undefined */}
                {displayName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-brand-dark">{displayName}</p>
                <p className="truncate text-xs text-brand-muted">{displayEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
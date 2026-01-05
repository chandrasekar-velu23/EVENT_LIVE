import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { 
  Bars3Icon, 
  BellIcon, 
  MagnifyingGlassIcon,
  ArrowLeftOnRectangleIcon 
} from "@heroicons/react/24/outline";
/* FIX: Logic Guard - Use useAuth for reactive state instead of raw localStorage */
import { useAuth } from "../../context/AuthContext"; 

interface DashboardHeaderProps {
  setIsOpen: (value: boolean) => void;
}

export default function DashboardHeader({ setIsOpen }: DashboardHeaderProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Reactively track the user

  // SAFETY GUARD: Provide solid fallbacks if the user object is not yet available
  const userName = user?.name || "Guest";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    logout(); // Use the logout function from context to sync the whole app
    toast.info("Logged out successfully");
    navigate("/", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-brand-accent/20 bg-white px-4 shadow-sm lg:px-8">
      <button
        type="button"
        className="p-2.5 text-brand-dark lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open sidebar"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1 items-center" onSubmit={(e) => e.preventDefault()}>
          <MagnifyingGlassIcon className="absolute left-0 h-5 w-5 text-brand-muted" />
          <input
            className="h-full w-full border-0 pl-8 text-brand-dark placeholder:text-brand-muted focus:ring-0 sm:text-sm outline-none"
            placeholder="Search dashboard..."
            type="search"
          />
        </form>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button className="text-brand-muted hover:text-brand-primary transition-colors relative">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-brand-primary ring-2 ring-white" />
          </button>

          <div className="h-6 w-px bg-brand-accent/20" />

          {/* User Profile & Logout */}
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold text-brand-dark leading-tight">{userName}</p>
              <button 
                onClick={handleLogout}
                className="text-xs font-bold text-brand-primary hover:text-brand-muted transition-colors"
              >
                Sign out
              </button>
            </div>
            
            <button 
              onClick={handleLogout}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-surface text-brand-primary font-bold shadow-sm ring-2 ring-white hover:ring-brand-primary/20 transition-all overflow-hidden"
              title="Logout"
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5 sm:hidden" />
              <span className="hidden sm:block">{userInitial}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
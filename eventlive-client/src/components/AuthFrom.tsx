import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as apiLogin, signup as apiSignup } from "../services/api"; // Renamed to avoid conflict
import { useAuth } from "../context/AuthContext"; // Import your context
import { toast } from "sonner";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type AuthType = "signup" | "login";

interface AuthFormProps {
  type: AuthType;
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const { login: setGlobalUser } = useAuth(); // Global state setter
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (type === "signup" && formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setLoading(true);
    try {
      const response = type === "signup" 
        ? await apiSignup({ ...formData, accountType: "User" }) 
        : await apiLogin(formData);
      
      if (!response?.data) {
        toast.error(response.message || "Authentication failed");
      } else {
        toast.success(response.message || "Success!");
        
        if (type === "login") {
          // IMPORTANT: Update global context state so App.tsx re-renders
          setGlobalUser(response.data); 
          navigate("/dashboard", { replace: true });
        } else {
          navigate("/login");
        }
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      const errorMsg = error.response?.data?.message || "Network error. Please try again.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Redirect browser to backend OAuth route
    const oauthUrl = `${import.meta.env.VITE_API_URL}/auth/google`;
    window.location.href = oauthUrl;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-bg px-4 py-12">
      <div className="card w-full max-w-md space-y-8 bg-white p-8 shadow-xl sm:p-10">
        
        {/* Header */}
        <header className="text-center">
          <Link to="/" aria-label="Go to homepage">
            <img src="/logo.svg" alt="EventLive Logo" className="mx-auto h-12 w-auto" />
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-brand-dark">
            {type === "signup" ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="mt-2 text-sm text-brand-muted">
            {type === "signup" ? "Join EVENTLIVE today" : "Sign in to your dashboard"}
          </p>
        </header>

        {/* OAuth 2.0 Action */}
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-brand-accent bg-white px-4 py-3 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-surface hover:shadow-sm active:scale-[0.98]"
        >
          <img 
            src="https://www.svgrepo.com/show/355037/google.svg" 
            className="h-5 w-5" 
            alt="Google" 
          />
          Continue with Google
        </button>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-brand-accent"></div>
          </div>
          <div className="relative flex justify-center text-xs font-semibold uppercase">
            <span className="bg-white px-4 text-brand-muted">Or with email</span>
          </div>
        </div>

        {/* Form Fields */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {type === "signup" && (
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-brand-dark">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                onChange={handleChange}
                className="mt-1.5 w-full rounded-lg border border-brand-accent bg-brand-surface/20 px-4 py-3 text-brand-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-brand-dark">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              className="mt-1.5 w-full rounded-lg border border-brand-accent bg-brand-surface/20 px-4 py-3 text-brand-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold text-brand-dark">Password</label>
            <div className="relative mt-1.5">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete={type === "signup" ? "new-password" : "current-password"}
                onChange={handleChange}
                className="w-full rounded-lg border border-brand-accent bg-brand-surface/20 px-4 py-3 pr-12 text-brand-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted hover:text-brand-primary transition-colors"
              >
                {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {type === "signup" && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-brand-dark">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                onChange={handleChange}
                className="mt-1.5 w-full rounded-lg border border-brand-accent bg-brand-surface/20 px-4 py-3 text-brand-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none"
                placeholder="••••••••"
                required
              />
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full py-4 text-base font-bold shadow-lg shadow-brand-primary/10 transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              type === "signup" ? "Start Free Trial" : "Sign In"
            )}
          </button>
        </form>

        <footer className="text-center text-sm text-brand-muted">
          {type === "signup" ? "Already have an account?" : "New to EVENTLIVE?"}
          <Link
            to={type === "signup" ? "/login" : "/get-started"}
            className="ml-1 font-bold text-brand-primary hover:underline"
          >
            {type === "signup" ? "Login" : "Create account"}
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AuthForm;
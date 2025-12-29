type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "rounded-lg px-6 py-3 text-sm font-semibold transition";

  const styles = {
    primary: "rounded-lg bg-[#3E5F44] px-10 py-3 text-sm font-bold text-brand-dark hover:opacity-50 transition",
    secondary:
      "border border-brand text-brand hover:bg-brand hover:text-white",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}

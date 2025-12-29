type PageLayoutProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageLayout({
  title,
  subtitle,
  children,
}: PageLayoutProps) {
  return (
    <section className="pt-32 pb-20 bg-brandBg min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-brandDark">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            {subtitle}
          </p>
        )}

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

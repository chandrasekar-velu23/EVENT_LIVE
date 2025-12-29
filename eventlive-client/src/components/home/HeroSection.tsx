import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 bg-brandBg">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brandDark">
          Host Powerful Virtual Events — Without Complexity
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          EVENTLIVE is an all-in-one virtual event management platform to create,
          monetize, and analyze webinars, conferences, workshops, and hybrid
          events — securely and at scale.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button>Get Started for Free</Button>
          <Button variant="secondary">Watch Demo</Button>
        </div>
      </div>
    </section>
  );
}

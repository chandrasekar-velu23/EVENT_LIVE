import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-brand text-white text-center">
      <h2 className="text-3xl font-bold">
        Ready to Go Live with EVENTLIVE?
      </h2>
      <p className="mt-4">
        Create, manage, and scale your virtual events with confidence.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Button>Get Started for Free</Button>
        <Button variant="secondary">Request a Demo</Button>
      </div>
    </section>
  );
}

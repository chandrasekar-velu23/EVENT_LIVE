import PageLayout from "../components/layout/PageLayout";
import Button from "../components/ui/Button";

export default function Pricing() {
  return (
    <PageLayout
      title="Simple, Transparent Pricing"
      subtitle="Choose a plan that fits your needs."
    >
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl">
          <h3 className="font-bold text-brandDark">Starter</h3>
          <p className="mt-2 text-gray-600">₹0 / month</p>
          <Button>Start Free</Button>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-brand">
          <h3 className="font-bold text-brandDark">Pro</h3>
          <p className="mt-2 text-gray-600">₹999 / month</p>
          <Button>Get Started</Button>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <h3 className="font-bold text-brandDark">Enterprise</h3>
          <p className="mt-2 text-gray-600">Custom pricing</p>
          <Button>Contact Sales</Button>
        </div>
      </div>
    </PageLayout>
  );
}

import PageLayout from "../components/layout/PageLayout";
import Button from "../components/ui/Button";

export default function Login() {
  return (
    <PageLayout
      title="Login"
      subtitle="Access your EVENTLIVE dashboard."
    >
      <form className="space-y-4 max-w-md">
        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full border p-3 rounded-lg"
          placeholder="Password"
        />
        <Button>Login</Button>
      </form>
    </PageLayout>
  );
}

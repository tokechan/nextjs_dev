import AuthPanel from "@/components/ui/auth-panel";


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="overfolow-hidden mx-auto w-full max-w-7xl">
        <div className="p-6 min-h-96 relative">
          <div className="space-y-4">
            <h1 className="test-xl font-bold text-brand-secondary">Welcome to Authy!!</h1>

            <p className="text-brand-secondary/70">This is a public page accessible to everyone.</p>
          </div>
        </div>
        <AuthPanel />
      </div>
    </div>
  );
}

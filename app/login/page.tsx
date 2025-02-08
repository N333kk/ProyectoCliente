import MainPanel from "@/app/ui/mainPanel";
import WelcomePanel from "@/app/ui/welcomePanel";
import UtilityPanel from "@/app/ui/utilityPanel";
import Login from "@/app/ui/loginForm";

export default function LoginPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col relative">
      <main className="grid grid-cols-9 grid-rows-6 gap-6 min-h-screen">
        <WelcomePanel />
        <MainPanel>
          <div className="text-center text-white text-3xl font-bold">
            <h1>Log In</h1>
            </div>
        </MainPanel>
        <UtilityPanel />
      </main>
      <div className="absolute inset-0 p-8 gap-16 sm:p-20 backdrop-blur-sm z-10 flex items-center justify-center">
        <Login />
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
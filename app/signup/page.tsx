import MainPanel from "@/app/ui/mainPanel";
import WelcomePanel from "@/app/ui/welcomePanel";
import Navbar from "@/app/ui/navbar";
import UtilityPanel from "@/app/ui/utilityPanel";
import Signup from "@/app/ui/signupForm";

export default function SignupPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col relative">
      <Navbar />
      <main className="grid grid-cols-9 grid-rows-6 gap-6 min-h-screen">
        <WelcomePanel />
        <MainPanel />
        <UtilityPanel />
      </main>
      <div className="absolute inset-0 p-8 gap-16 sm:p-20 backdrop-blur-sm z-10 flex items-center justify-center">
        <Signup />
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
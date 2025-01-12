import MainPanel from "./mainPanel";
import WelcomePanel from "./welcomePanel";
import Navbar from "./navbar";
import UtilityPanel from "./utilityPanel";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-onyx-200 p-8 gap-16 sm:p-20">
        <main className="grid grid-cols-9 grid-rows-6 gap-6 min-h-screen">
          <WelcomePanel />
          <MainPanel />
          <UtilityPanel />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          
        </footer>
      </div>
    </div>
  );
}
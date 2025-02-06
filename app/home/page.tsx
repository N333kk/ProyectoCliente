import MainPanel from "../ui/mainPanel";
import WelcomePanel from "../ui/welcomePanel";
import Navbar from "../ui/navbar";
import UtilityPanel from "../ui/utilityPanel";

export default function Home() {
  return (
  
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col relative">
      <Navbar />
      <main className="grid grid-cols-9 grid-rows-6 gap-6 min-h-screen">
        <WelcomePanel />
        <MainPanel>
          <div></div>
        </MainPanel>
        <UtilityPanel />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
    
  );
}
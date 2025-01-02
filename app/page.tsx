import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow grid grid-rows-[1fr_1fr_1fr_20px] grid-cols-[400px_1fr_1fr_1fr_20px] bg-onyx-200 items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <main className="grid grid-cols-4 grid-rows-2 gap-64">
          <div className="border border-onyx-200 rounded-2xl w-96 h-64 bg-paynes_gray-200 text-white-300 text-center flex items-center justify-center">
            <p>1</p>
          </div>
          <div className="border border-onyx-200 rounded-2xl w-96 h-64 bg-paynes_gray-200 text-white-300 text-center flex items-center justify-center col-span-2">
            <p>2</p>
          </div>
          <div className="border border-onyx-200 rounded-2xl w-96 h-64 bg-paynes_gray-200 text-white-300 text-center flex items-center justify-center">
            <p>3</p>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          
        </footer>
      </div>
    </div>
  );
}
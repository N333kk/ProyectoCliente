import { addBalance } from "@/app/lib/serverActions";

export default async function IngresoForm() {

    return (

<div className="p-8 bg-paynes_gray-100 border border-rich_black-100 rounded-lg">
              <form action={addBalance} className="flex flex-col items-center">
                <div className="py-2">
                  <input
                    type="number" 
                    step="0.01"
                    id="cantidad"
                    name="cantidad"
                    required
                    placeholder="Cantidad"
                    className="border border-rich_black-100 rounded-lg py-1 px-2 bg-stone-200 text-black"
                  />
                </div>
                <div className="py-2">
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    required
                    className="border border-rich_black-100 rounded-lg py-1 px-4 bg-stone-200 text-black"
                  />
                </div>
                <button className="bg-paynes_gray-400 text-white rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                </button>
              </form>
            </div>
    )
}
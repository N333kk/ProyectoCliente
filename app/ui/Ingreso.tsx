"use client";
import useSWR from "swr";
import { deleteIngreso } from "../lib/serverActions";
import Link from "next/link"

async function fetcher(...args: Parameters<typeof fetch>) {
  return (await fetch(...args)).json();
}

export default function Ingreso() {
  const { data } = useSWR<
    {
      id: number;
      monto: number;
      fecha: string;
      consolidado: boolean;
      userId: number;
    }[]
  >("/api/ingresos", fetcher, { refreshInterval: 500 });

  return (
    <div className="border-paynes_gray-200  border px-16 pt-2 pb-2 col-span-2 row-start-3 row-end-8 rounded-md flex flex-col justify-center items-center bg-rich_black-500">
      <p className="font-bold">Ingresos</p>
      <div className="flex flex-col items-center justify-center">
        {data?.map((ingreso) => (
          <div
            key={ingreso.id}
            className="flex justify-between bg-stone-400 rounded-lg text-black my-1 w-[720px]"
          >
            <p className="flex-1 py-1 px-2 truncate">{ingreso.monto}€</p>
            <p className="flex-1 py-1 px-2 truncate">
              {new Date(ingreso.fecha).toISOString().slice(0, 10)}
            </p>
            <p className="flex-1 py-1 px-2 truncate">
              {ingreso.consolidado ? "Consolidado" : "No Consolidado"}
            </p>
            <button className="p-2 bg-red-500" onClick={async () => await deleteIngreso(ingreso.id)}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="size-4">
  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
</svg>
 </button>
 <Link className="p-2 bg-rich_black-800" href={`/home/ingresos/edit/${ingreso.id}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 fill-white">
  <path fillRule="evenodd" d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z" clipRule="evenodd" />
</svg>
</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

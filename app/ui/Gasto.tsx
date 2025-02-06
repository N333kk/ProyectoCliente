"use client";
import useSWR from "swr";

async function fetcher(...args: Parameters<typeof fetch>) {
  return (await fetch(...args)).json();
}

export default function Gastos() {
  const { data } = useSWR<
    {
      id: number;
      nombre: string;
      monto: number;
      fecha: string;
      consolidado: boolean;
      userId: number;
    }[]
  >("/api/", fetcher, { refreshInterval: 1000 });

  return (
    <div className="border-paynes_gray-200  border px-16 pt-2 pb-2 col-span-2 row-start-3 row-end-8 rounded-md flex flex-col justify-center items-center bg-rich_black-500">
      <p className="font-bold">Gastos</p>
      <div className="flex flex-col items-center justify-center">
        {data?.map((gasto) => (
          <div
            key={gasto.id}
            className="flex justify-between bg-stone-400 rounded-lg text-black my-1 w-[720px]"
          >
            <p className="flex-1 py-1 px-2 truncate">{gasto.nombre}</p>
            <p className="flex-1 py-1 px-2 truncate">{gasto.monto}</p>
            <p className="flex-1 py-1 px-2 truncate">
              {new Date(gasto.fecha).toISOString().slice(0, 10)}
            </p>
            <p className="flex-1 py-1 px-2 truncate">
              {gasto.consolidado ? "Consolidado" : "No Consolidado"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

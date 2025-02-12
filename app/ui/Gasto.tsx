"use client";
import useSWR from "swr";
import { useState } from "react";
import { deleteGastos } from "../lib/serverActions";
import Link from "next/link";

async function fetcher(...args: Parameters<typeof fetch>) {
  return (await fetch(...args)).json();
}

export default function Gasto() {
  const { data, error, isLoading } = useSWR<
    {
      id: number;
      nombre: string;
      monto: number;
      fecha: string;
      consolidado: boolean;
      userId: number;
    }[]
  >("/api/gastos", fetcher, { refreshInterval: 500 });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  if (error) return <div>Error durante la carga!</div>;

  if (isLoading)
    return (
      <div
        role="status"
        className="border-paynes_gray-200  border px-32 pt-6 pb-6 col-span-2 row-start-3 row-end-8 rounded-md flex flex-col justify-center items-center bg-paynes_gray-100"
      >
        <span className="font-bold mb-4">Cargando Gastos...</span>
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-between bg-gradient-to-r from-onyx-600/40 via-white-400/40 to-onyx-800/40 rounded-lg text-black my-1 w-[720px]">
            <p className="flex-1 py-1 px-2 truncate"></p>
            <p className="flex-1 py-1 px-2 truncate"></p>
            <p className="flex-1 py-1 px-2 truncate"></p>
            <p className="flex-1 py-1 px-2 truncate"></p>
            <button className="p-4 bg-onyx-600/0 h-4 w-4"></button>
            <button className="p-4 bg-onyx-600/0  h-4 w-4"></button>
          </div>
        </div>
      </div>
    );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  return (
    <div className="border-paynes_gray-200  border px-32 pt-6 pb-6 col-span-2 row-start-3 row-end-8 rounded-md flex flex-col justify-center items-center bg-paynes_gray-100">
      <p className="font-bold mb-4">Gastos</p>
      <div className="flex flex-col items-center justify-center">
        {currentItems?.map((gasto) => (
          <div
            key={gasto.id}
            className="flex justify-between bg-gradient-to-r from-onyx-600 via-white-400 to-onyx-800 rounded-lg text-black my-1 w-[720px]"
          >
            <p className="flex-1 py-1 px-2 truncate">{gasto.nombre}</p>
            <p className="flex-1 py-1 px-2 truncate">{gasto.monto}€</p>
            <p className="flex-1 py-1 px-2 truncate">
              {new Date(gasto.fecha).toISOString().slice(0, 10)}
            </p>
            <p className="flex-1 py-1 px-2 truncate">
              {gasto.consolidado ? "Consolidado" : "No Consolidado"}
            </p>
            <button
              className="p-2 bg-red-500 hover:bg-red-400 transition-all *:hover:fill-black *:hover:w-6"
              onClick={async () => await deleteGastos(gasto.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="white"
                className="size-4 hover:w-6 transition-all"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Link
              className="p-2 bg-rich_black-600 hover:bg-rich_black-700 transition-all *:hover:fill-black *:hover:w-6 rounded-r-lg"
              href={`/dashboard/gastos/edit/${gasto.id}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 fill-white hover:w-6 transition-all"
              >
                <path
                  fillRule="evenodd"
                  d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded-md"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 rounded-md"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

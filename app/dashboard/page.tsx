"use client";

import { BarChart } from "@/app/ui/Chart";
import { useState, useEffect } from "react";
export default function Page() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchChartData() {
      const res = await fetch("/api/chart");
      const data = await res.json();
      setChartData(data);
    }
    fetchChartData();
  }, []);

  if (!chartData) {
    return (
      <div className="w-9/12 h-96 m-32 p-8 bg-paynes_gray-100 rounded-3xl flex flex-col justify-center items-center">
       
        <span className="py-4 font-bold">Cargando...</span>
      </div>
    );
  }

  return (
    <div className="w-9/12 h-96 m-32 p-8 bg-paynes_gray-100 rounded-3xl transition-all">
      <h2>Gastos e Ingresos a lo largo del año actual</h2>

      <BarChart
        data={chartData}
        index="mes"
        xAxisLabel={"Meses"}
        showGridLines={true}
        categories={["Gastos", "Ingresos"]}
        valueFormatter={(number: number) =>
          `€${Intl.NumberFormat("eu").format(number).toString()}`
        }
        colors={["red", "lime"]}
      />
    </div>
  );
}

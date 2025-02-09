'use client'

import { BarChart } from "@/app/ui/Chart";
import { useState, useEffect } from 'react'
export default function Page() {
  const [posts, setPosts] = useState(null)
 
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/chart')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])
 
  if (!posts) return <div>Loading...</div>
 
  return (
    <div className="w-full m-32 p-8 bg-paynes_gray-100 rounded-3xl transition-all">
      <h2>Gastos e Ingresos a lo largo del año</h2>
      <BarChart
        data={posts}
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
};


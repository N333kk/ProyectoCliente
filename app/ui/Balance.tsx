"use client"

import useSWR from "swr";

async function fetcher(...args: Parameters<typeof fetch>) {
    return (await fetch(...args)).json();
  }
  
  export default function Balance() {
    const { data } = useSWR<
      {
        balance:number
      }
    >("/api/balance", fetcher, { refreshInterval: 1000 });
    
    return( 
        <div>
            <p className="font-bold text-lg py-8">Tu balance es de: {data ? data.balance : "Cargando..."} €</p>
        </div>
    );

  }
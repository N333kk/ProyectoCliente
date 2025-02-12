import { addGasto } from "@/app/lib/serverActions" 

export default function GastoForm(){

    return(
    <div className="p-8 bg-paynes_gray-100 border border-rich_black-100 rounded-lg">
                    <form action={addGasto} className="flex flex-col items-center">
                        <div className="py-2">
                            <input type="text" 
                            id="concepto"
                            name="concepto"
                            placeholder="Concepto"
                            required 
                            className="border border-rich_black-100 rounded-lg py-1 px-2 bg-stone-200 text-black"/>
                        </div>
                        <div className="py-2">
                            <input type="text"
                            id="cantidad"
                            name="cantidad"
                            placeholder="Cantidad" 
                            required
                            className="border border-rich_black-100 rounded-lg py-1 px-2 bg-stone-200 text-black"/>
                        </div>
                        <div className="py-2">
                            <input type="date" 
                            id="fecha"
                            name="fecha"
                            required
                            className="border border-rich_black-100 rounded-lg py-1 px-4 bg-stone-200 text-black dark:text-black"/>
                        </div>
                        <button className="bg-paynes_gray-400 text-white rounded-md p-2">Agregar</button>
                        </form>
                </div>
    )
}
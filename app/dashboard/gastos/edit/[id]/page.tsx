import { updateGasto } from "@/app/lib/serverActions";
import Gasto from "@/app/ui/Gasto";




export default async function DashGastos({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const handleUpdateGasto = async (formData: FormData) => {
    "use server"
    const id = Number((await params).id);
    await updateGasto(formData, id);
  };
    

    return (
            <div className="flex flex-row justify-center items-center">
                <div className="flex justify-center items-center h-32 p-8 ">
                <Gasto />
                </div>
                <div className="p-8 bg-paynes_gray-100 border border-rich_black-100 rounded-lg">
                    <form action={handleUpdateGasto} className="flex flex-col items-center">
                        <div className="py-2">
                            <input type="text" 
                            id="concepto"
                            name="concepto"
                            required
                            placeholder="Concepto" 
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
                            className="border border-rich_black-100 rounded-lg py-1 px-4 bg-stone-200 text-black"/>
                        </div>
                        <button className="bg-paynes_gray-400 text-white rounded-md p-2">Editar</button>
                        </form>
                </div>
              </div>
      );
    }

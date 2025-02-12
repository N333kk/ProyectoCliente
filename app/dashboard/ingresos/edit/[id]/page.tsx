import { updateIngreso } from "@/app/lib/serverActions";
import Ingreso from "@/app/ui/Ingreso";

export default async function DashIngresos({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const handleUpdateIngreso = async (formData: FormData) => {
    "use server";
    const id = Number((await params).id);
    await updateIngreso(formData, id);
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex justify-center items-center h-32 p-8 ">
        <Ingreso />
      </div>
      <form
        action={handleUpdateIngreso}
        className="p-8 bg-paynes_gray-100 border border-rich_black-100 rounded-lg"
      >
        <div className="flex flex-col items-center">
          <div className="py-2">
            <input
              type="text"
              id="cantidad"
              name="cantidad"
              placeholder="Cantidad"
              required
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
            Editar
          </button>
        </div>
      </form>
    </div>
  );
}

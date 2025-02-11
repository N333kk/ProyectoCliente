import IngresoForm from "@/app/ui/ingresoForm";
import Ingreso from "@/app/ui/Ingreso";

export default async function DashIngresos() {

  
  return (
    
          <div className="flex flex-row justify-center items-center">
            <div className="flex justify-center items-center h-32 p-8 ">
              <Ingreso />
            </div>
            <IngresoForm />
          </div>
  );
}

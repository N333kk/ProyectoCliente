import GastoForm from "@/app/ui/gastoForm";
import Gasto from "@/app/ui/Gasto";


export default async function DashGastos() {
  
    

    return (
              <div className="flex flex-row justify-center items-center p-">
                <div className="flex justify-center items-center h-32 p-8 ">
                <Gasto />
                </div>
                <GastoForm />
              </div>
      );
    }

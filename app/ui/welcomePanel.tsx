import { auth } from "@/auth";
import Balance from "@/app/ui/Balance";

export default async function WelcomePanel() {
    const session = await auth();
    
    if (!session) {
        return (
            <div className="bg-paynes_gray-200 border-paynes_gray-100 border col-span-2 row-start-1 row-end-3 rounded-md flex justify-center items-center">
                <p className="font-bold">No hay usuario aun</p>
            </div>
        );
    }
    const user = session.user;

    return (
        <div className="bg-paynes_gray-200 border-paynes_gray-100 border col-span-2 row-start-1 row-end-3 rounded-md flex flex-col justify-start items-start p-8">
            <p className="font-bold py-4 text-3xl">Bienvenid@ {user?.name}</p>

            <Balance />
        </div>
    );
}
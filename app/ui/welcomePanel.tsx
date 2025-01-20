import { auth } from "@/auth";
import { getBalance } from "../lib/serverActions";

export default async function WelcomePanel() {
    const session = await auth();
    const balance = await getBalance();
    if (!session) {
        return (
            <div className="bg-paynes_gray-200 border-paynes_gray-100 border col-span-2 row-start-1 row-end-3 rounded-md flex justify-center items-center">
                <p className="font-bold">No hay usuario aun</p>
            </div>
        );
    }
    const user = session.user;

    console.log(session);
    return (
        <div className="bg-paynes_gray-200 border-paynes_gray-100 border col-span-2 row-start-1 row-end-3 rounded-md flex flex-col justify-start items-start p-8">
            <p className="font-bold py-4">Bienvenid@ {user?.name}</p>

            <p className="font-bold text-xs">Tu balance actual es: {balance} €</p>
        </div>
    );
}
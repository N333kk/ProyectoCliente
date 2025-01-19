import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/24/outline";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-center min-h-screen bg-white-200">
            <div className="p-4">
            <h1 className="border rounded-lg border-raisin_black-600 px-2 py-1 bg-rich_black-200 font-bold">Gestion de Gastos</h1>
            </div>
            <div>
            <Link href="/login" className=""> <LockClosedIcon className="h-8 w-8"></LockClosedIcon></Link>
            </div>
        </div>
    )
}

import { deleteTypes } from "../../lib/seed";

export default function Seed() {
 deleteTypes();
    return (
        <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-4xl font-bold">Seed Page</h1>
        </div>
    )
}
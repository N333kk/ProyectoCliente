
import { seedTypes } from "../../lib/seed";

export default function Seed() {
 seedTypes();
    return (
        <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-4xl font-bold">Seed Page</h1>
        </div>
    )
}
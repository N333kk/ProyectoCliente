"use client";
import Boton from "./Boton"
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline"

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form action="{formAction}" className="space-y-3 bg-stone-100 p-6 rounded-xl">
                <div className="flex justify-center items-center rounded-xl bg-onyx-400 px-6 pb-4 pt-4 mx-auto">
                    <h1>Log-In</h1>
                </div>
                <div className="w-full">
                    <div className="py-3 px-12">
                        <label htmlFor="username" className="text-onyx-300 py-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full rounded-md text-onyx-100 bg-stone-300 border-onyx-300 border py-1 px-2"
                            placeholder="Introduce tu nombre de usuario"
                        />
                    </div>
                    <div className="py-3 px-12">
                        <label htmlFor="password" className="text-onyx-300">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full rounded-md text-onyx-100 bg-stone-300 border-onyx-300 border py-1 px-2"
                            placeholder="Introduce tu contraseña"
                        />
                    </div>

                </div>

                <div>
                    <Boton buttonText="Iniciar Sesión" buttonIcon={<ArrowRightEndOnRectangleIcon onClick={() => console.log('prueba')}/>} />
                </div>
            </form>
        </div>
    )
}
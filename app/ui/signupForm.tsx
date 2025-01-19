"use client";
import Boton from "./Boton"
import {  UserPlusIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline"
import { useActionState } from 'react';
import { register } from "@/app/lib/serverActions";
import Link from "next/link";

export default function SignUp() {

    const [errorMessage, formAction, isPending] = useActionState(
        register,
        undefined,
    );

    

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form action={formAction} className="space-y-3 bg-stone-100 p-6 rounded-xl">
                <div className="flex justify-center items-center rounded-xl bg-onyx-400 px-6 pb-4 pt-4 mx-auto">
                    <h1>Registro</h1>
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
                <div className="flex justify-between">
                <div>
                        <Link href="/login" className="group flex items-center justify-center rounded-full w-10 h-10 bg-onyx-400 text-white transition-all duration-300 hover:w-40">
                        <span className="w-5 h-5"><ArrowRightEndOnRectangleIcon  /></span>
                        <span className="ml-0 overflow-hidden whitespace-nowrap transition-all duration-300 max-w-0 group-hover:max-w-xs group-hover:ml-4">
        Iniciar Sesion
      </span>
                        </Link>
                    </div>
                    <div>
                        <Boton buttonText="Registro" buttonIcon={<UserPlusIcon aria-disabled={isPending}/>} />
                    </div>
                </div>
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            </form>
        </div>
    )
}
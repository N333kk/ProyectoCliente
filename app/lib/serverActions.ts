'use server';

import { signIn, auth } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from './prisma';
import bcrypt from 'bcrypt';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Credenciales invalidas.';
                    
                    default:

                    return 'Error inesperado'
                }
            }
            throw error;
        }
    }

export async function register(
    prevState: string | undefined,
    formData: FormData)
    {
        try {
            const saltedPassword = await bcrypt.hash(formData.get('password') as string, 10);
            await prisma.users.create({
                data: {
                    username: formData.get('username') as string,
                    password: saltedPassword as string,
                    userTypeId: 1,
                    
                },
            })
        } catch (error) {
            if(error instanceof Error){
                return error.message;
            }
        }
    }

export async function getBalance() {
    const session = await auth();

    const user = session?.user;

    const userToCheck = await prisma.users.findFirst({
        select: {
            balance: true,
        }, where: {
            username: user?.name ?? '',
        }
    })

    return userToCheck?.balance ?? 0;

}

export async function addBalance(formData: FormData) {
    const fechaActual = new Date().toISOString().slice(0, 10);
    const fechaIngreso = (formData.get('fecha') as string)
    let consolidado: boolean;
    if(fechaIngreso == fechaActual){
        consolidado = true;
    } else {
        consolidado = false;
    }

    const session = await auth();

    const user = session?.user;

    const userToCheck = await prisma.users.findFirst({
        select: {
            id: true,
            balance: true,
        }, where: {
            username: user?.name ?? '',
        }
    })

    if(!userToCheck){
        throw new Error('Usuario no encontrado');
    }

    await prisma.ingersos.create({
        data: {
            monto: Number(formData.get('cantidad') as string),
            userId: userToCheck.id,
            fecha: new Date(formData.get('fecha') as string),
            consolidado: consolidado,
        }
    })

    if(consolidado){
        await prisma.users.update({
            where: {
                id: userToCheck.id,
            },
            data: {
                balance: (userToCheck.balance ?? 0) + Number(formData.get('cantidad') as string),
            }
        })
    }
}

export async function getGastos() {
    const session = await auth();

    const user = session?.user;

    const userToCheck = await prisma.users.findFirst({
        select: {
            id: true,
        }, where: {
            username: user?.name ?? '',
        }
    })

    const gastos = await prisma.gastos.findMany({
        where: {
            userId: userToCheck?.id,
        }
    })

    return gastos;
}
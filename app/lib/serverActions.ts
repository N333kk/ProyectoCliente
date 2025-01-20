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
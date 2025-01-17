import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { Usuario } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

async function getUser(username: string): Promise<Usuario | null> {
    try {
        const usuario = await sql<Usuario>`SELECT * FROM users WHERE username = ${username}`;
        return usuario.rows[0];
    } catch (error) {
        console.error('Error al fetchear usuario : ', error);
        throw new Error ('Error al fetchear usuario');
    }
}

export const { auth, signIn, signOut } = NextAuth({

    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            const parsedCredentials = z.object({username: z.string(), password: z.string().min(8)})
                .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { username, password } = parsedCredentials.data;
                    const user = await getUser(username);
                    if (!user) return null;
                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (passwordMatch) {
                        return user;
                    }
                }

                console.log('Credenciales invalidas');
                return null;
            },
        }),
    ],

});
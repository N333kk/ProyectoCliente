import { prisma } from '../../lib/prisma';
import { auth } from '@/auth';

export async function GET() {

    const session = await auth();

    const user = session?.user;

    const userToCheck = await prisma.users.findFirst({
        select: {
            id: true,
        }, where: {
            username: user?.name ?? '',
        }
    })

    

    const ingresos = await prisma.ingersos.findMany({
        where: {
            userId: userToCheck?.id,
        }
    })

    return Response.json(ingresos);

}
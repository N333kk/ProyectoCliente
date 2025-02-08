import { prisma } from '../../lib/prisma';
import { auth } from '@/auth';

export async function GET() {

    const session = await auth();

    const user = session?.user;

    const balance = await prisma.users.findFirst({
        select: {
            balance: true,
        }, where: {
            username: user?.name ?? '',
        }
    })

    

    

    return Response.json(balance);

}
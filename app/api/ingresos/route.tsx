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

    const ingresosToUpdate = await prisma.ingersos.findMany({
        where: {
            userId: userToCheck?.id,
          fecha: {
            lt: new Date(),
          },
          consolidado: false, 
        },
      });
      if(ingresosToUpdate.length > 0){
        console.log("test");
      await prisma.ingersos.updateMany({
        where: {
          id: {
            in: ingresosToUpdate.map(ingreso => ingreso.id),
          },
        },
        data: {
          consolidado: true,
        },
      });
    
      for (const ingreso of ingresosToUpdate) {
        await prisma.users.update({
          where: {
            id: ingreso.userId,
          },
          data: {
            balance: {
              increment: ingreso.monto, 
            },
          },
        });
      }
    }

    

    const ingresos = await prisma.ingersos.findMany({
        where: {
            userId: userToCheck?.id,
        }
    })

    return Response.json(ingresos);

}
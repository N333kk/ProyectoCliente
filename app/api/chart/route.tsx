import { prisma } from '@/app/lib/prisma';
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

    

    const gastos = await prisma.gastos.findMany({
        select:{
            monto: true,
            fecha: true,
        },
        where: {
            userId: userToCheck?.id,
            fecha: {
                gte: new Date('2025-01-01'),
                lt: new Date('2026-01-01')
            }
        }
    })

    const ingresos = await prisma.ingersos.findMany({
        select:{
            monto: true,
            fecha: true,
        },
        where: {
            userId: userToCheck?.id,
            fecha: {
                gte: new Date('2025-01-01'),
                lt: new Date('2026-01-01')
            }
        }
    })

    const sumaGastos = gastos.reduce((acc: number[], gasto) => {
        const mes = new Date(gasto.fecha).getMonth();
        acc[mes] = (acc[mes] || 0) + gasto.monto;
        return acc;
    }, []);

    const sumaIngresos = ingresos.reduce((acc: number[], ingreso) => {
        const mes = new Date(ingreso.fecha).getMonth();
        acc[mes] = (acc[mes] || 0) + ingreso.monto;
        return acc;
    }, []);

    const meses: { [key: number]: string } = {
        0: "enero",
        1: "febrero",
        2: "marzo",
        3: "abril",
        4: "mayo",
        5: "junio",
        6: "julio",
        7: "agosto",
        8: "septiembre",
        9: "octubre",
        10: "noviembre",
        11: "diciembre"
    
    };

    const respuesta = Object.keys(meses).map(key => {
        const mes = parseInt(key);
        return {
            mes: meses[mes],
            "Gastos": sumaGastos[mes] || 0,
            "Ingresos": sumaIngresos[mes] || 0
        };
    });

    return Response.json(respuesta);

}
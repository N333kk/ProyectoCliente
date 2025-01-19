import { prisma } from './prisma';
export async function deleteTypes(){
    try{
        await prisma.user_types.deleteMany({
            where: {
                type: 'User'
            }
        })
        await prisma.user_types.deleteMany({
            where: {
                type: 'GroupAdmin'
            }
        })
        await prisma.user_types.deleteMany({
            where: {
                type: 'Group Admin'
            }
        })
        await prisma.user_types.deleteMany({
            where: {
                type: 'Admin'
            }
        })
        console.log('Types deleted')
    } catch (error) {
        if(error instanceof Error){
            return error.message;
        }
    }
}

export async function seedTypes(){

    try {
        const userExists = await prisma.user_types.findFirst({
            where:{
                type: 'User'
            }
        })
        const groupAdminExists = await prisma.user_types.findFirst({
            where:{
                type: 'GroupAdmin'
            }
        })
        const adminExists = await prisma.user_types.findFirst({
            where:{
                type: 'Admin'
            }
        })
        if(!userExists){
        await prisma.user_types.create({
            data:{
                id: 1,
                type: 'User'
            }
            
        })
        console.log('User type created')
    } else {
        console.log('User type already exists')
    }
    if(!groupAdminExists){
        await prisma.user_types.create({
            data:{
                id: 2,
                type: 'GroupAdmin'
            }
            
        })
        console.log('Group Admin type created')
    } else {
        console.log('Group Admin type already exists')
    }
    if(!adminExists){
        await prisma.user_types.create({
            data:{
                id: 3,
                type: 'Admin'
            }
            
        })
        console.log('Admin type created')
    } else {
        console.log('Admin type already exists')
    }
    } catch (error) {
        if(error instanceof Error){
            return error.message;
        }
    }
};
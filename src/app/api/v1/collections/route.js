import prisma from '@/libs/prisma'

export async function POST(request) {
    const { anime_mal_id, user_mail } = await request.json()
    const data = { anime_mal_id, user_mail }

    const createCollection = await prisma.collection.create({ data })
    if(!createCollection) return Response.json({status: 500, isCreated: false})
        else return Response.json({data: 200, isCreated: true})
}
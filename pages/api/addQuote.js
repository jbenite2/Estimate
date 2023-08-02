import { PrismaClient } from '@prisma/client'




export default async function handle(req, res) {
  if (req.method == "POST"){
    return await addQuote(req, res);
  }
}


async function addQuote(req, res){
    const prisma = new PrismaClient()
    const body = req.body
    try{
        const newEntry = await prisma.collection.create({
            data : {
                height: body.height,
                width: body.width,
                materialColor: body.materialColor,
                materialName: body.materialName,
                quality: body.quality,
                thickness: body.thickness,
                image: body.image,
            },
        })
        return res.status(200).json(newEntry)
    } catch {
        console.log("error")
        return res.status(400).json({message: "Something went wrong"})
    }
}

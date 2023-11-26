import { PrismaClient } from '@prisma/client';


export default async function handle(req, res) {
  if (req.method === "GET") {
    return await getPics(req, res);
  }
}


async function getPics(req, res) {
    const prisma = new PrismaClient();
    // const body = req.body;
    try {
        const pics = await prisma.templates.findMany({
            select: {
                fileName: true, // Include only the fileName column
            },
        });


        return res.status(200).json(pics, { success: true });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}

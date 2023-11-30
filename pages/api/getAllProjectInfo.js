import { PrismaClient } from '@prisma/client';


export default async function handle(req, res) {
  if (req.method === "GET") {
    return await getData(req, res);
  }
}


async function getData(req, res) {
    const prisma = new PrismaClient();
    // const body = req.body;
    try {
        const pics = await prisma.templates.findFirst({
			where: {
				id: (parseInt(req.query.index)+1),
			},
		});


        return res.status(200).json(pics, { success: true });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}


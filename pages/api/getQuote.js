import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await getQuote(req, res);
  }
}

async function getQuote(req, res) {
  const prisma = new PrismaClient();
  try {
    const { index } = req.query; // Assuming the index number is passed as a query parameter

    const data = await prisma.templates.findFirst({
      where: {
        id: Number(index) // Convert index to a number if needed
      }
    });

    if (!data) {
      return res.status(404).json({ error: 'Row not found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}

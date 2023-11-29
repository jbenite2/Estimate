import { PrismaClient } from '@prisma/client';


export default async function handle(req, res) {
  if (req.method === "POST") {
    return await addQuote(req, res);
  }
}

async function addQuote(req, res) {
  const prisma = new PrismaClient();
  const body = req.body;
  try {
    const newEntry = await prisma.templates.create({
      data: {
        productName: body.productName,
		clientName: body.clientName,
		projectName: body.projectName,
		salePrice: parseFloat(body.salePrice),
		unitCost: parseFloat(body.unitCost),
        productWidth: parseFloat(body.productWidth),
        productHeight: parseFloat(body.productHeight),
		productWeight: parseFloat(body.productWeight),
        productColor: body.productColor,
        materialType: body.materialType,
        cutQuality: body.cutQuality,
        productThickness: body.productThickness,
        purchasedWidth: parseFloat(body.purchasedWidth),
        purchasedHeight: parseFloat(body.purchasedHeight),
        purchasedThickness: body.purchasedThickness,
        materialColorPurchased: body.materialColorPurchased,
        materialCosts: parseFloat(body.materialCosts),
        estimatedAbrasiveUse: parseFloat(body.estimatedAbrasiveUse),
		estimatedCutTime: body.estimatedCutTime,
		estimatedCutDistance: parseFloat(body.estimatedCutDistance),
		suppliers: body.suppliers,
        fileName: body.file,
      },
    });
    return res.status(200).json(newEntry);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
}

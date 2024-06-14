import { PrismaClient } from '@prisma/client';

export default async function handle(req, res) {
  if (req.method === "POST") {
    return await addQuote(req, res);
  }
}

async function addQuote(req, res) {
  const prisma = new PrismaClient();
  const body = req.body;


  console.log(body)

  try {
    // Ensure dates are in ISO-8601 format if they are provided
    const projectStartDate = body.projectStartDate ? new Date(body.projectStartDate).toISOString() : null;
    const projectEndDate = body.projectEndDate ? new Date(body.projectEndDate).toISOString() : null;

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
        corte: parseFloat(body.corte),
        ensamblaje: parseFloat(body.ensamblaje),
        soldadura: parseFloat(body.soldadura),
        pulido: parseFloat(body.pulido),
        instalacion: parseFloat(body.instalacion),
        purchasedWidth: parseFloat(body.purchasedWidth),
        purchasedHeight: parseFloat(body.purchasedHeight),
        purchasedThickness: body.purchasedThickness,
        materialColorPurchased: body.materialColorPurchased,
        materialCosts: parseFloat(body.materialCosts),
        estimatedAbrasiveUse: parseFloat(body.estimatedAbrasiveUse),
        estimatedCutTime: body.estimatedCutTime,
        estimatedCutDistance: parseFloat(body.estimatedCutDistance),
        suppliers: body.suppliers,
        productClassification: body.productClassification,
        note: body.note,
        projectStartDate: projectStartDate,
        projectEndDate: projectEndDate,
        fileName: body.file,
      },
    });
    return res.status(200).json(newEntry);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
}


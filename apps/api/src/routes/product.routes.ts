import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const { category, priceRange, sortBy, search } = req.query;

    let whereClause: any = {};
    
    if (category && category !== "All") {
      whereClause.category = category;
    }

    if (priceRange) {
      const [min, max] = (priceRange as string).split("-").map(Number);
      whereClause.price = {
        gte: min,
        ...(max && { lte: max }),
      };
    }

    if (search) {
      whereClause.OR = [
        { title: { contains: search as string, mode: "insensitive" } },
        { description: { contains: search as string, mode: "insensitive" } },
      ];
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: sortBy === "recent" 
        ? { createdAt: "desc" }
        : sortBy === "price_asc"
        ? { price: "asc" }
        : sortBy === "price_desc"
        ? { price: "desc" }
        : { downloads: "desc" },
    });

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export const productRoutes = router;
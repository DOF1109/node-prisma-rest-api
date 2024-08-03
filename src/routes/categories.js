import { Router } from "express";
import { prisma } from "../db.js";

const router = new Router();

router.get("/categories", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
});

router.get("/categories-products", async (req, res) => {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  res.json(categories);
});

export default router;

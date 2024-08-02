import { Router } from "express";
import { PrismaClient } from '@prisma/client'

const router = new Router();
const prisma = new PrismaClient()

router.get("/products", async (req, res) => {
  const products = await prisma.products.findMany()
  res.json(products)
});

export default router;

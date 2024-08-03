import { Router } from "express";
import { prisma } from "../db.js";

const router = new Router();

router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const foundedProduct = await prisma.product.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      category: true,
    },
  });

  if (!foundedProduct)
    return res.status(404).json({ message: "Product not found" });

  res.json(foundedProduct);
});

router.post("/products", async (req, res) => {
  const newProduct = await prisma.product.create({
    data: req.body,
  });
  res.json(newProduct);
});

router.delete("/products/:id", async (req, res) => {
  const deletedProduct = await prisma.product.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (!deletedProduct)
    return res.status(404).json({ message: "Product not found" });

  res.json(deletedProduct);
});

router.put("/products/:id", async (req, res) => {
  const updatedProduct = await prisma.product.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });

  if (!updatedProduct)
    return res.status(404).json({ message: "Product not found" });

  res.json(updatedProduct);
});

export default router;

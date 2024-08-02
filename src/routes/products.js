import { Router } from "express";

const router = new Router();

router.get("/products", (req, res) => {
  res.send("Products!");
});

export default router;

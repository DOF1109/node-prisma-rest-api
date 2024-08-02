import { Router } from "express";

const router = new Router();

router.get("/categories", (req, res) => {
  res.send("Categories!");
});

export default router;

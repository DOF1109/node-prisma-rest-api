import express from "express";
import productsRoutes from "./routes/products.js";
import categoriesRoutes from "./routes/categories.js";

const port = process.env.PORT ?? 3000

const app = express();

// Send and receive data as json
app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);

app.listen(port, () => {
  console.log(`Server listening on port: http://localhost:${port}`);
});

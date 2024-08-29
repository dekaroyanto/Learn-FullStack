import express from "express";
import {
  getProducts,
  getProductbyId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductbyId);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;

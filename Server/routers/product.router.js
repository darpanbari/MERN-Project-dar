import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productFiltersController,
  productPhotoController,
  searchProductController,
  updateProductController,
} from "../controllers/product.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";

const router = express.Router();

//routes
router.post("/create-product", requireSignIn, isAdmin, createProductController);
//routes
router.put("/update-product/:pid", requireSignIn, isAdmin, updateProductController);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//search product
router.get("/search/:keyword", searchProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);


export default router;

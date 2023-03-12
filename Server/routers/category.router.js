import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/auth.middleware.js";
import {getCategory,createCategory,deleteCategory,singleCategory,updateCategory,} from "./../controllers/category.controller.js";

const router = express.Router();

//routes
// create category
router.post("/create-category",requireSignIn,isAdmin,createCategory);

//update category
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategory);

//getALl category
router.get("/get-category", getCategory);

//single category
router.get("/single-category/:slug", singleCategory);

//delete category
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategory);

export default router;

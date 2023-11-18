import { Router } from "express";
import { Login, Register } from "../Controllers/Auth.Controller.js";
import { addproduct, getAllProducts } from "../Controllers/Product.Controller.js";

const router=Router();
router.post("/login",Login)
router.post("/register",Register)
router.post("/addproduct",addproduct)
router.get("/getallproducts",getAllProducts)

export default router
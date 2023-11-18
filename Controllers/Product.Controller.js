import ProductModal from "../Modals/Product.Modal.js";


export const addproduct=async(req,res)=>{
try{
const {name,price,image,category,}=req.body
if(!name || !price|| !image || !category)
return res.send(404).json({success:false,message:'All fields are mandatory'})
const product=new ProductModal({
    name,price,category,image
})
await product.save();
return res.status(200).json({success:true,message:"Product Added successfully"})
}
catch(error){
    res.status(500).json({success:false, message:error})
}
}


export const getAllProducts=async (req,res)=>{
    try{
        const products=await ProductModal.find({})
        if(products.length)
        {
            return res.status(200).json({success:true,message:'products found',products})
        }
        else{
            return res.status(404).json({success:false,message:'products not found'})
        }

    }
    catch(error){
        res.status(500).json({success:false,message:error})
    }
}
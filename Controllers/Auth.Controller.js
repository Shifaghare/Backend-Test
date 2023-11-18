import UserModal from "../Modals/User.Modal.js"

export const Login= async (req,res)=>{
    const {email,password}=req.body
    try{
      if(!email || !password)
        return res.status(404).json({success:false,message:'All fields are mandatory'})
      const user=await UserModal.find({email:email})
      if(!user){
        return res.status(404).json({success:false,message:'Please Enter a valid email'}) 
      }
      if(!isPasswordCorrect){
        return res.status(404).json({success:false,message:'Enter a valid password'})
      }   
        return res.status(200).json({success:true,message:'Login Successful',user :{name:user.name,id:user._id}})
    }
    catch(error){
        res.status(500).json({success:false, message:error})
    }
}

export const Register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name|| !email|| !password)
        return res.send(401).json({success:false,message:"Fill all the fields"})
   
    const user =new UserModal({
        name:name,
        email:email,
        password:password
    })
    await user.save()
    return res.send(200).json({success:true,message:"Registration Successfully Done"})

    }
    catch(error){
        return res.send(500).json({success:false,message:error})

    }
}



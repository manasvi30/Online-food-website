import userModel from "../models/userModel.js"

//add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({_id: req.body.userId});
        let cartData = userData.cartData || {}; // Ensure cartData is an object
        
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        
        console.log("Updated cartData:", cartData);
        
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Added to Cart"});
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}


//add remove items from user cart
const removeFromCart=async(req,res) =>{
    try {
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        if (cartData[req.body.itemId]>0) {
        cartData[req.body.itemId]-=1;

        }
        
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true,message:"Removed from Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//add fetch user cart data
const getCart = async (req, res) => {
    try {
        // Correctly retrieve the user by ID
        let userData = await userModel.findById(req.body.userId);
        
        // Access the cart data
        let cartData = userData.cartData;
        
        // Return the cart data in the response
        res.json({success: true, cartData});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error fetching cart data"});
    }
}


export {addToCart,removeFromCart,getCart}
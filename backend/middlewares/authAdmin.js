import jtw from 'jsonwebtoken'

// admin authentication moddle ware

const authAdmin = async (req,res,next) => {
    try{

        const {atoken} = req.headers
        if (!atoken) {
            return res.json({success:false,message:"Not authorixed Login Again"})
        }
        const token_decode = jtw.verify(atoken,process.env.JWT_SECRET)

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false,message:"Not authorixed Login Again"})
        }

        next()
        
    } catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default authAdmin
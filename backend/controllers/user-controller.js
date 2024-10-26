import User from "../models/User";


export const getAllUsers = async(req,res,next) => {

        let users;
        try{
         users = await User.find();

} catch(err) {
    return next(err);
}

if(!users){
    return res.status(500).json({message : "Unexpected error occured"});
}


return res.send(200).json({users});
};
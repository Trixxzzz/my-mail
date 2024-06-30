import Email from "../Model/email.js";

export const saveSentEmails = async (request, response) => {
    try {
        const email = await new Email(request.body);
        email.save();

        response.status(200).json('email saved successfully');
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const getEmails=async(req,res)=>{ 
    try{
        let emails;
        if(req.params.type==='bin'){
            emails=await Email.find({bin:true})
        }
        else if(req.params.type==='allmail'){
            emails=await Email.find({})
        }  else if(req.params.type==='starred'){
            emails=await Email.find({starred:true,bin:false})
        } 
        else{ 
            emails=await Email.find({type:req.params.type})
        }
        return res.status(200).json(emails);
    }catch(e){
        console.log(e);
        res.status(500).json(e.message);
    }
}

export const moveEmailsToBin=async(req,res)=>{
    try{
        await Email.updateMany({_id:{$in:req.body}},{$set:{bin:true,starred:false,type:''}}) 
        return res.status(200).json('Emails deleted successfully');
    }
    catch(e){
        console.log(e);
        res.status(500).json(e.message);
    }
}


export const toggleStarredEmails=async(req,res)=>{
    try{
        await Email.updateOne({_id:req.body.id},{$set:{starred:req.body.value}})
        return res.status(200).json('Emails starred successfully');
    }
    catch(e){
        console.log(e);
        res.status(500).json(e.message);
    }
} 

export const deleteEmails=async(req,res)=>{
    try{
        await Email.deleteMany({ _id: { $in: req.body }})
        res.status(200).json('Emails deleted permanently');    }
    catch(e){
        console.log(e);
        res.status(500).json(e.message);
    }
}
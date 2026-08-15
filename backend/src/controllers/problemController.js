// problem
// eachProblem
const problemSchema=require("../models/Problem")
exports.problem=async(req,res)=>{
    try{
        const problems=await problemSchema.find({});
        // console.log(problems.length);
        return res.status(200).json({
            success:true,
            message:"Problem found",
            problems
        })
    }catch(error){
       next(error);
    }
}

exports.eachProblem=async(req,res)=>{
    return res.status(200).json({
        success:true,
        message: "Problem Found"
    })
}

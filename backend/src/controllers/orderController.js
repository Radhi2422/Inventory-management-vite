const orderinfo =require("../models/orderSchema.js");
const { getTemporalClient } = require("../temporal/client.js");

exports.getOrders =
async(req,res)=>{

    try{
        const orderData=await orderinfo.find({});
                
                return res.status(200).json({
                    success:true,
                    count:orderData.length,
                    orderData,
                })
            }
            catch(error){
                next(error);
            }
};

exports.checkOutOrder=async(req,res,next)=>{
    try {

        const { orderId } = req.body.orderDetails;

        const client = await getTemporalClient();

        const workflowId = `order-${orderId}`;
        // console.log("Reached here 2",workflowId);

        const handle = await client.workflow.start(
            "orderWorkflow",
            {
                args: [orderId],
                taskQueue: "order-processing",
                workflowId
            }
        );

        res.status(202).json({
            success: true,
            message: "Order processing started",
            workflowId: handle.workflowId
        });

    }catch(err){
        next(err);
    }
}



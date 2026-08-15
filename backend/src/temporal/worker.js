const { Worker } = require("@temporalio/worker");

async function startWorker() {

    const worker = await Worker.create({
        workflowsPath: require.resolve("./workflows/orderWorkflow"),
        activities: require("./activities/orderActivities"),
        taskQueue: "order-processing",
    });

    console.log("Order worker started");

    await worker.run();
}

startWorker();



const {
    proxyActivities
} = require("@temporalio/workflow");

const activities = proxyActivities({
    startToCloseTimeout: "1 minute"
});

async function orderWorkflow(orderId) {

    await activities.validateOrder(orderId);

    await activities.reserveStock(orderId);

    await activities.processPayment(orderId);

    await activities.createOrder(orderId);

    await activities.sendOrderEmail(orderId);

    return {
        success: true,
        orderId
    };
}

module.exports = {
    orderWorkflow
};

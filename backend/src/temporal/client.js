
const { Connection, Client } = require("@temporalio/client");

async function getTemporalClient() {

    try {
        console.log("Connecting to Temporal...");

        const connection = await Connection.connect({
            address: "localhost:7233",
        });

        console.log("✅ Temporal connection established");

        const client = new Client({
            connection,
        });

        // Verify by making a real Temporal API call
        await client.workflowService.getSystemInfo({});

        console.log("✅ Temporal server is reachable");

        return client;
    } catch (error) {
        console.error("❌ Temporal connection failed");
        console.error("Message:", error.message);
        console.error("Code:", error.code);

        throw error;
    }
}

module.exports = {
    getTemporalClient
};
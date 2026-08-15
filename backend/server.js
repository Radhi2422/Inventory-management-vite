require("dotenv").config();

const app = require("./src/db/app");
const http = require("http");
const connectDB =
require("./src/config/db");

const logger = require("./src/logs/logger.js");
connectDB();

const PORT =process.env.PORT || 5001;
const server = http.createServer(app);

server.on("clientError", (err, socket) => {
    console.error("Client Error:", err.message);
    socket.destroy();
});
server.listen(5003);
// app.listen(PORT, () => {
//     // logger.info(
//     //     `Server running on ${PORT}`
//     // );
//     console.log(
//         `Server running on ${PORT}`
//     );
// });

const express = require("express");
const cors = require("cors");
const compression = require("compression");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../api documentation/swagger.js");

// const helmet=require("helmet");
// const rateLimit=require("express-rate-limit");
// const mongoSanitize=require("express-mongo-sanitize");
// const xss=require("xss-clean");
// const hpp=require("hpp");

const logRoutes=require("../routes/logRoutes.js")
const authRoutes =require("../routes/authRoutes");
const productRoutes = require("../routes/productroutes");
const customerRoutes = require("../routes/customerroutes");
const orderRoutes = require("../routes/orderRoutes");
const problemRoutes=require("../routes/problemRoutes.js")
const errorMiddleware = require("../middleware/errorMiddleware");
const logFrontendError= require("../routes/frontendRoutes.js");
const requestLogger = require("../logs/requestLogger.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(compression());
app.use("/api/logs",logRoutes);
app.use("/api/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/customers", customerRoutes);
app.use("/orders",orderRoutes);
app.use("/problems",problemRoutes);
app.use("/frontend-error", logFrontendError);
app.use(errorMiddleware);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

module.exports = app;
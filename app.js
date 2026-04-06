const express = require("express");
const app = express();
const taskRoutes = require("./src/routes/taskRoutes");
const errorHandler = require("./src/middleware/errorMiddleware");

app.use(express.json());
app.use("/tasks", taskRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
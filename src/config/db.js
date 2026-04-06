const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/database.sqlite"
});

const TaskModel = require("../models/taskModel")(sequelize, DataTypes);
sequelize.sync();

module.exports = {
  sequelize,
  Task: TaskModel
};
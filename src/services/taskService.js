const { Task } = require("../config/db");
const { Op } = require("sequelize");

exports.createTask = (data) => Task.create(data);

exports.getTasks = async (page, limit, search) => {
  return Task.findAndCountAll({
    where: {
      isDeleted: false,
      title: {
        [Op.like]: `%${search}%`
      }
    },
    offset: (page - 1) * limit,
    limit: parseInt(limit)
  });
};

exports.updateTask = async (id, data) => {
  const task = await Task.findByPk(id);
  if (!task) throw { status: 404, message: "Task not found" };

  return task.update(data);
};

exports.deleteTask = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) throw { status: 404, message: "Task not found" };

  return task.update({ isDeleted: true });
};
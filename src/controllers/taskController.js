const { validationResult } = require("express-validator");
const service = require("../services/taskService");

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    const task = await service.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;
    const data = await service.getTasks(page, limit, search);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const task = await service.updateTask(req.params.id, req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await service.deleteTask(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};
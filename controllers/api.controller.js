const { Todo } = require("../models");

module.exports = {
  getAllTodos: async (req, res) => {
    const data = await Todo.findAll({});

    return res.status(200).json({
      status: "OK",
      data,
    });
  },
  createTodos: async (req, res) => {
    const { assignee, task, due_date, status } = req.body;
    const data = await Todo.create({ assignee, task, due_date, status });

    return res.status(201).json({
      status: "CREATED",
      data,
    });
  },
  editTodos: async (req, res) => {
    const { assignee, task, due_date, status } = req.body;
    const data = await Todo.update({ assignee, task, due_date, status }, { where: { id: req.params.id } });
    const updatedData = await Todo.findOne({ where: { id: req.params.id } });

    return res.status(201).json({
      status: "EDITED",
      data: updatedData,
    });
  },
  deleteTodos: async (req, res) => {
    const deletedData = await Todo.findOne({ where: { id: req.params.id } });
    const data = await Todo.destroy({ where: { id: req.params.id } });

    return res.status(200).json({
      status: "DELETED",
      data: {
        message: "successfully delete todo",
        deletedData,
      },
    });
  },
  getOneTodos: async (req, res) => {
    const data = await Todo.findOne({ where: { id: req.params.id } });

    if (data) {
      return res.status(200).json({
        status: "OK",
        data,
      });
    }

    return res.status(404).json({
      status: "NOT FOUND",
      data: { message: `todos with id ${req.params.id} not found!` },
    });
  },
};

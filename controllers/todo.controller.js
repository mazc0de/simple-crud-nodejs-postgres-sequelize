const { Todo } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  getAllTodos: async (req, res) => {
    const data = await Todo.findAll({});

    return res.render("todo/index", {
      data,
      title: "All Todos",
      helpers: {
        ifEquals(arg1, arg2, options) {
          return arg1 == arg2 ? options.fn(this) : options.inverse(this);
        },
        incremented(index) {
          index++;
          return index;
        },
      },
    });
  },
  getOneTodos: async (req, res) => {
    const data = await Todo.findOne({ where: { id: req.params.id } });

    return res.render("todo/detail", {
      data,
      title: "All Todos",
      helpers: {
        ifEquals(arg1, arg2, options) {
          return arg1 == arg2 ? options.fn(this) : options.inverse(this);
        },
      },
    });
  },
  createTodos: (req, res) => {
    return res.render("todo/create", { title: "Create Todo" });
  },
  postTodos: async (req, res) => {
    const { assignee, task, due_date, status } = req.body;
    const data = await Todo.create({ assignee, task, due_date, status });

    return res.redirect("/");
  },
  editTodos: async (req, res) => {
    const data = await Todo.findOne({ where: { id: req.params.id } });
    return res.render("todo/edit", { data, title: "Edit Todo" });
  },
  updateTodos: async (req, res) => {
    const { assignee, task, due_date, status } = req.body;
    const data = await Todo.update({ assignee, task, due_date, status }, { where: { id: req.params.id } });

    return res.redirect("/");
  },
  deleteTodos: async (req, res) => {
    const data = await Todo.destroy({ where: { id: req.params.id } });

    return res.redirect("/");
  },
  searchTask: async (req, res) => {
    let { search } = req.query;
    search = search.toLowerCase();

    const data = await Todo.findAll({ where: { task: { [Op.like]: "%" + search + "%" } } });
    // res.json({ data });
    res.render("todo/search", {
      data,
      helpers: {
        ifEquals(arg1, arg2, options) {
          return arg1 == arg2 ? options.fn(this) : options.inverse(this);
        },
      },
    });
  },
};

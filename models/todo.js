"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {}
  }
  Todo.init(
    {
      assignee: DataTypes.STRING,
      task: DataTypes.STRING,
      due_date: DataTypes.DATEONLY,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};

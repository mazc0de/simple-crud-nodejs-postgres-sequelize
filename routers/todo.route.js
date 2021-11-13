const router = require("express").Router();
const todo = require("../controllers/todo.controller");

router.get("/", todo.getAllTodos);
router.get("/todo/:id", todo.getOneTodos);

router.get("/create", todo.createTodos);
router.post("/create", todo.postTodos);

router.get("/search", todo.searchTask);

router.get("/edit/:id", todo.editTodos);
router.put("/edit/:id", todo.updateTodos);

router.delete("/delete/:id", todo.deleteTodos);
// router.delete("/todos/:id/destroy", todo.deleteTodos);
// router.get("/todos/:id", todo.getOneTodos);

module.exports = router;

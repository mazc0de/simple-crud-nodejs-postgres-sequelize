const router = require("express").Router();
const api = require("../controllers/api.controller");

router.get("/api/todos", api.getAllTodos);
router.post("/api/todos", api.createTodos);
router.put("/api/todos/:id", api.editTodos);
router.delete("/api/todos/:id/destroy", api.deleteTodos);
router.get("/api/todos/:id", api.getOneTodos);

module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");
const auth = require("../middleware/authMiddleware");
const { body } = require("express-validator");

router.use(auth);

router.post(
  "/",
  [body("title").notEmpty().withMessage("Title is required")],
  controller.create
);

router.get("/", controller.getAll);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
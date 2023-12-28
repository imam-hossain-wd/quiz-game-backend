"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizRoutes = void 0;
const express_1 = require("express");
const quiz_controller_1 = require("./quiz.controller");
const router = (0, express_1.Router)();
router.post('/create', quiz_controller_1.quizController.createQuiz);
router.get('/', quiz_controller_1.quizController.getQuiz);
exports.quizRoutes = router;

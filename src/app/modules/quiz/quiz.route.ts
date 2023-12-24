import { Router } from "express";
import { quizController } from "./quiz.controller";


const router = Router();

router.post('/create',
quizController.createQuiz);
router.get('/',
quizController.getQuiz);


export const quizRoutes = router;
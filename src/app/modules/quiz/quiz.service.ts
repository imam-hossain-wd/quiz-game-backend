import { Quiz } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createQuiz = async (data: Quiz): Promise<Quiz> => {
    const result = await prisma.quiz.create({
      data,
    });
    return result;
};
const getQuiz = async (): Promise<Quiz[] | null> => {
    const result = await prisma.quiz.findMany();
    return result;
};

  export const quizService = {
    createQuiz,
    getQuiz
  }
  
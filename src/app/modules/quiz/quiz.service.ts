/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Prisma, Quiz} from "@prisma/client";
import prisma from "../../../shared/prisma";

type IFiltering = {
  category?: string,
  limit?:string
}

const createQuiz = async (data: Quiz): Promise<Quiz> => {
    const result = await prisma.quiz.create({
      data
    });
    return result;
};

const getQuiz = async (query: IFiltering): Promise<Quiz[] | null> => {
  const { category, limit } = query;
  const quizLimit = limit ? parseInt(limit) : undefined;

  const filterOptions: Prisma.QuizWhereInput = {};

  if (category) {
    filterOptions.category = category;
  }

  const result = await prisma.quiz.findMany({
    where: filterOptions,
    take: quizLimit,
    include:{
      quizOptions:true
    }
  });

  return result;
};

const deleteQuiz = async (id:string) => {
  const result = await prisma.quiz.delete({
    where:{
      id
    }
  })

  return result;
}

  export const quizService = {
    createQuiz,
    getQuiz,
    deleteQuiz
  }
  
import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { quizService } from "./quiz.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";



const createQuiz: RequestHandler = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await quizService.createQuiz(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user create successfully',
      data: result,
    });
  });
const getQuiz: RequestHandler = catchAsync(async (req, res) => {
    const result = await quizService.getQuiz();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user create successfully',
      data: result,
    });
  });

  export const quizController = {
    createQuiz,
    getQuiz
  }
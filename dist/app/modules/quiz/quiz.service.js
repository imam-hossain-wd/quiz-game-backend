"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createQuiz = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.quiz.create({
        data
    });
    return result;
});
const getQuiz = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, limit } = query;
    const quizLimit = limit ? parseInt(limit) : undefined;
    const filterOptions = {};
    if (category) {
        filterOptions.category = category;
    }
    const result = yield prisma_1.default.quiz.findMany({
        where: filterOptions,
        take: quizLimit,
        include: {
            quizOptions: true
        }
    });
    return result;
});
const deleteQuiz = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.quiz.delete({
        where: {
            id
        }
    });
    return result;
});
exports.quizService = {
    createQuiz,
    getQuiz,
    deleteQuiz
};

/*
  Warnings:

  - The primary key for the `Quiz` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Quiz` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_quizId_fkey";

-- AlterTable
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Option";

-- DropTable
DROP TABLE "Question";

-- CreateTable
CREATE TABLE "QuizQuestion" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "quizId" INTEGER NOT NULL,

    CONSTRAINT "QuizQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizOption" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "QuizOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizOption" ADD CONSTRAINT "QuizOption_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuizQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

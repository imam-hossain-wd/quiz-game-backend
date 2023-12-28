/*
  Warnings:

  - You are about to drop the column `a` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `b` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `c` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `correct` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `d` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the `QuizCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "QuizCategory" DROP CONSTRAINT "QuizCategory_userId_fkey";

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "a",
DROP COLUMN "b",
DROP COLUMN "c",
DROP COLUMN "categoryId",
DROP COLUMN "correct",
DROP COLUMN "d",
DROP COLUMN "question",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "QuizCategory";

-- CreateTable
CREATE TABLE "QuizOptions" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "a" TEXT NOT NULL,
    "b" TEXT NOT NULL,
    "c" TEXT NOT NULL,
    "d" TEXT NOT NULL,
    "correct" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,

    CONSTRAINT "QuizOptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizOptions" ADD CONSTRAINT "QuizOptions_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

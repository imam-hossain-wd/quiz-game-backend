/*
  Warnings:

  - The primary key for the `Quiz` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `QuizOption` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `QuizQuestion` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "QuizOption" DROP CONSTRAINT "QuizOption_questionId_fkey";

-- DropForeignKey
ALTER TABLE "QuizQuestion" DROP CONSTRAINT "QuizQuestion_quizId_fkey";

-- AlterTable
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Quiz_id_seq";

-- AlterTable
ALTER TABLE "QuizOption" DROP CONSTRAINT "QuizOption_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "questionId" SET DATA TYPE TEXT,
ADD CONSTRAINT "QuizOption_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "QuizOption_id_seq";

-- AlterTable
ALTER TABLE "QuizQuestion" DROP CONSTRAINT "QuizQuestion_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "quizId" SET DATA TYPE TEXT,
ADD CONSTRAINT "QuizQuestion_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "QuizQuestion_id_seq";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "fullName" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizOption" ADD CONSTRAINT "QuizOption_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuizQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

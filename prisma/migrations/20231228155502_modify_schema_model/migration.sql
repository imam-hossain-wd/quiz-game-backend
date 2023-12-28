/*
  Warnings:

  - You are about to drop the column `mark` on the `QuizCategory` table. All the data in the column will be lost.
  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `a` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `b` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `c` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `d` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_quizId_fkey";

-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "a" TEXT NOT NULL,
ADD COLUMN     "b" TEXT NOT NULL,
ADD COLUMN     "c" TEXT NOT NULL,
ADD COLUMN     "d" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "QuizCategory" DROP COLUMN "mark";

-- DropTable
DROP TABLE "Option";

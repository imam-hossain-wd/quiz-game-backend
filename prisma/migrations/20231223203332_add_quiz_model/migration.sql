/*
  Warnings:

  - The values [perfomer] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('admin', 'performer');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
COMMIT;

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT 'full_name',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'performer',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "mark" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

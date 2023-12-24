-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'performer');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT 'full_name',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'performer',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

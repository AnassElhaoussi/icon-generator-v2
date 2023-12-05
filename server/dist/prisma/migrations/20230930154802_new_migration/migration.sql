/*
  Warnings:

  - You are about to drop the `Credits` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `credits_amount` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Credits" DROP CONSTRAINT "Credits_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "credits_amount" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Credits";

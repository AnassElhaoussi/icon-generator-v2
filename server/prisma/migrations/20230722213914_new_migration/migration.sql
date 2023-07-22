/*
  Warnings:

  - You are about to drop the column `verfied_email` on the `User` table. All the data in the column will be lost.
  - Added the required column `verified_email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "verfied_email",
ADD COLUMN     "verified_email" BOOLEAN NOT NULL;

/*
  Warnings:

  - Added the required column `isPremium` to the `Generations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Generations" ADD COLUMN     "isPremium" BOOLEAN NOT NULL;

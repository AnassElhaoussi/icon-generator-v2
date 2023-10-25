/*
  Warnings:

  - Added the required column `color` to the `Generations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconDescription` to the `Generations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconObject` to the `Generations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `style` to the `Generations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Generations" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "iconDescription" TEXT NOT NULL,
ADD COLUMN     "iconObject" TEXT NOT NULL,
ADD COLUMN     "style" TEXT NOT NULL;

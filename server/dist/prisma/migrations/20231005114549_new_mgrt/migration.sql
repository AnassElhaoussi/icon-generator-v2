/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Generations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Generations" DROP COLUMN "imageUrl",
ADD COLUMN     "URLs" TEXT[];

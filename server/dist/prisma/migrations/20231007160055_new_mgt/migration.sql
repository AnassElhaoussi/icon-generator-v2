/*
  Warnings:

  - Made the column `userId` on table `Credits` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Credits" DROP CONSTRAINT "Credits_userId_fkey";

-- DropIndex
DROP INDEX "Generations_authorEmail_key";

-- AlterTable
ALTER TABLE "Credits" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Credits" ADD CONSTRAINT "Credits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

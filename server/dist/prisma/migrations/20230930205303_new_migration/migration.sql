/*
  Warnings:

  - You are about to drop the column `credits_amount` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "credits_amount";

-- CreateTable
CREATE TABLE "Credits" (
    "creditsId" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Credits_pkey" PRIMARY KEY ("creditsId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credits_userId_key" ON "Credits"("userId");

-- AddForeignKey
ALTER TABLE "Credits" ADD CONSTRAINT "Credits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

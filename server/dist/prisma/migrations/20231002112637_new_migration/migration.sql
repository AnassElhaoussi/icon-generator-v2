-- DropForeignKey
ALTER TABLE "Credits" DROP CONSTRAINT "Credits_userId_fkey";

-- AlterTable
ALTER TABLE "Credits" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Credits" ADD CONSTRAINT "Credits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

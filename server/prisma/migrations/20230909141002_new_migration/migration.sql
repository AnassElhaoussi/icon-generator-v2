-- AlterTable
ALTER TABLE "User" ALTER COLUMN "times_visited" DROP DEFAULT;
DROP SEQUENCE "User_times_visited_seq";

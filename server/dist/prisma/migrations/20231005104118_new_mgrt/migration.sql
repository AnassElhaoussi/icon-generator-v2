-- CreateTable
CREATE TABLE "Generations" (
    "generationId" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "imageUrl" TEXT[],
    "n" INTEGER NOT NULL,
    "authorEmail" TEXT NOT NULL,

    CONSTRAINT "Generations_pkey" PRIMARY KEY ("generationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Generations_authorEmail_key" ON "Generations"("authorEmail");

-- AddForeignKey
ALTER TABLE "Generations" ADD CONSTRAINT "Generations_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

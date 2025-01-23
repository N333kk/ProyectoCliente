-- AlterTable
ALTER TABLE "gastos" ADD COLUMN     "consolidado" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "ingersos" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "fecha" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consolidado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ingersos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingersos" ADD CONSTRAINT "ingersos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

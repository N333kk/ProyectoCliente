-- DropIndex
DROP INDEX "groups_adminId_unique";

-- DropIndex
DROP INDEX "users_username_unique";

-- AlterTable
ALTER TABLE "gastos" ALTER COLUMN "fecha" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "userTypeId" SET DEFAULT 1,
ALTER COLUMN "balance" SET DEFAULT 0;

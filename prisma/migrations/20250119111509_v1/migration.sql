-- CreateTable
CREATE TABLE "gastos" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "fecha" DATE NOT NULL,

    CONSTRAINT "gastos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_types" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "userTypeId" INTEGER NOT NULL,
    "group_id" INTEGER,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "balance" DOUBLE PRECISION,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "users_username_unique" ON "users"("username");

CREATE UNIQUE INDEX "groups_adminId_unique" ON "groups"("adminId");

-- AddForeignKey
ALTER TABLE "gastos" ADD CONSTRAINT "gastos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "fk_adminid_users_id" FOREIGN KEY ("adminId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "user_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

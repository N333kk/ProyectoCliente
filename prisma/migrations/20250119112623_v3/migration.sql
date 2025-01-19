/*
  Warnings:

  - A unique constraint covering the columns `[adminId]` on the table `groups` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "groups_adminId_key" ON "groups"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

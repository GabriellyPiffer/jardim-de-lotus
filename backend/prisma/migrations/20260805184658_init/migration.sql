/*
  Warnings:

  - Added the required column `cor` to the `Flor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `flor` ADD COLUMN `cor` VARCHAR(191) NOT NULL;

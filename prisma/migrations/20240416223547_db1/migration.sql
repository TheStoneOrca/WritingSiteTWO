-- CreateTable
CREATE TABLE "user" (
    "userid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userid")
);

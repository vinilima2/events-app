-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alias" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "locale" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "backgroundImage" TEXT NOT NULL,
    "expectedAudience" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "guests" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL,
    "isAccompanied" BOOLEAN NOT NULL,
    "numberCompanions" INTEGER NOT NULL,
    "eventId" TEXT,
    CONSTRAINT "guests_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

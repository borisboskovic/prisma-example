import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {}

main()
    .catch((err) => {
        console.log("🎯 >>> err", err);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

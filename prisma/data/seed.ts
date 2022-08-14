import { PrismaClient } from "@prisma/client";
import users from "./users.json";

const prisma = new PrismaClient({ log: ["error"] });

async function main() {
    await prisma.user.deleteMany();
    await prisma.user.createMany({ data: users });
}

main()
    .then(() => console.log("Seed function run completed"))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

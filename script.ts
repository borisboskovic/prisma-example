import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query", "error", "info", "warn"] });

async function main() {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email: "boris.boskovic92@gmail.com",
        },
    });
    console.log("🎯 >>> user", user);
}

main()
    .catch((err) => {
        console.log("🎯 >>> err", err);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

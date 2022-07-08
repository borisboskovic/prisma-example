import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // await prisma.user.create({ data: { email: "boris.boskovic92@gmail.com" } });
    const user = await prisma.user.findFirst();
    console.log("🎯 >>> user", user);
}

main()
    .catch((err) => {
        console.log("🎯 >>> err", err);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: { email: "boris.boskovic92@gmail.com", name: "Boris Bošković" },
    });
    const user = await prisma.user.findMany();
    console.log("🎯 >>> user", user);
}

main()
    .catch((err) => {
        console.log("🎯 >>> err", err);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function main() {
  await db.user.create({
    data: {
      emailAddress: 'test@gmail.com',
      firstName: 'Test',
      lastName: 'User',
    },
  });

  console.log('✅ User created');
  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});

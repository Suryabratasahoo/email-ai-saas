// playground.ts
import { db } from './server/db';
async function main() {
    await db.user.create({
        data: {
            emailAddress: 'test@gmail.com',
            firstName: 'Test',
            lastName: 'User',
        },
    });
    console.log('User created');
    process.exit(0);
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});

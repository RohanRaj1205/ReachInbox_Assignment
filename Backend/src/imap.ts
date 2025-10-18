import { connect } from 'imap-simple';
import * as dotenv from 'dotenv';
dotenv.config();

const config1 = {
    imap: {
        user: process.env.EMAIL1,
        password: process.env.EMAIL1_PASS,
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};

const config2 = {
    imap: {
        user: process.env.EMAIL2,
        password: process.env.EMAIL2_PASS,
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};

export async function syncEmails() {
    const connection1 = await connect(config1);
    await connection1.openBox('INBOX');
    connection1.on('mail', () => {
        console.log('New email in account 1');
    });

    const connection2 = await connect(config2);
    await connection2.openBox('INBOX');
    connection2.on('mail', () => {
        console.log('New email in account 2');
    });
}

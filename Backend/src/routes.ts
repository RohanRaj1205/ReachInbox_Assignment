import express from 'express';
import { syncEmails } from './imap';
import { categorizeEmail } from './ai_categorization';

const router = express.Router();

router.get('/sync', async (req, res) => {
    await syncEmails();
    res.send('Emails synced');
});

router.get('/categorize', (req, res) => {
    const category = categorizeEmail("Interview", "Let's schedule a meeting");
    res.send(category);
});

export default router;

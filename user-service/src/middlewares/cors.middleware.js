import cors from 'cors';
import { config } from 'dotenv';

export const corsMiddleware = cors({
    origin: config.ALLOWED_ORIGINS?.split(',') || '*', // Allow all origins
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'Accept',
        'Origin',
    ], // Allow specific headers
});
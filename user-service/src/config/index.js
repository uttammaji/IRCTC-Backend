import dotenv from 'dotenv';
import fs from 'fs';
import { URL } from 'url';

dotenv.config();

// Safely read package.json name in Native ES Modules
const packageJsonPath = new URL('../../package.json',
    import.meta.url);
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

export const config = {
    SERVICE_NAME: packageJson.name,
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || '*',
};
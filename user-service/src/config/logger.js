import winston from 'winston';
import * as config from './index.js'; // Aggregates all exports into a config object

const logger = winston.createLogger({
    // Handles both named exports and default export structures safely
    level: config.LOG_LEVEL || config.default?.LOG_LEVEL || 'info',
    defaultMeta: { service: config.SERVICE_NAME || config.default?.SERVICE_NAME || 'unknown' },
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message, service }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message} [Service: ${service || 'unknown'}]`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

export default logger;
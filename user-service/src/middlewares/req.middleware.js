import logger from '../config/logger.js';

const reqLogger = (req, res, next) => {
    logger.debug(`Incoming request: ${req.method} ${req.url}`);

    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info(`Request completed: ${req.method} ${req.url} - Status: ${res.statusCode} - Duration: ${duration}ms`);
    });

    next();
}

export default reqLogger;
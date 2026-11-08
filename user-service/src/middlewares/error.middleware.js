import AppError from '../utils/error.js';

export default (err, req, res, next) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    } else {
        console.error('Unexpected error:', err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
};
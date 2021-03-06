const HttpStatus = require('http-status-codes');

/**
 * Health controller
 */
class HealthController {
    static async healthCheck(req, res) {
        return res.status(HttpStatus.OK).json({
            db: 'ok',
        });
    }
}

module.exports = {
    healthCheck: HealthController.healthCheck,
};
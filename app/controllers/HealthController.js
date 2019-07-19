/**
 * Health controller
 */
class HealthController {
    static healthCheck() {
        return {
            db: 'ok',
        };
    }
}

module.exports = {
    healthCheck: HealthController.healthCheck,
};